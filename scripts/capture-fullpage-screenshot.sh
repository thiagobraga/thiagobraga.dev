#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Capture a full-page screenshot with Playwright.

Usage:
  bun run screenshot:fullpage
  bun run screenshot:fullpage -- --preset mobile
  bun run screenshot:fullpage -- --preset tablet
  bun run screenshot:fullpage -- --preset laptop
  bun run screenshot:fullpage -- --width 1440 --height 900
  bun run screenshot:fullpage -- --url https://thiagobraga.dev.local/ --output screenshot.png

Options:
  --preset <name>     desktop, laptop, tablet, mobile
  --url <url>         Page URL. Default: https://thiagobraga.dev.local/
  --output <path>     Output PNG path. Default depends on preset.
  --width <px>        Custom viewport width.
  --height <px>       Custom viewport height.
  --scale <number>    Device scale factor. Defaults to preset value.
  --mobile            Force mobile browser emulation.
  --no-mobile         Disable mobile browser emulation.
  -h, --help          Show this help.

Environment fallbacks:
  SCREENSHOT_URL, SCREENSHOT_OUTPUT, VIEWPORT_WIDTH, VIEWPORT_HEIGHT,
  DEVICE_SCALE_FACTOR, SCREENSHOT_PRESET, SCREENSHOT_IS_MOBILE
EOF
}

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
URL="${SCREENSHOT_URL:-https://thiagobraga.dev.local/}"
OUTPUT="${SCREENSHOT_OUTPUT:-}"
OUTPUT_WAS_SET="false"
PRESET="${SCREENSHOT_PRESET:-desktop}"
VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-}"
VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-}"
DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-}"
IS_MOBILE="${SCREENSHOT_IS_MOBILE:-}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --preset)
      PRESET="${2:?Missing value for --preset}"
      shift 2
      ;;
    --url)
      URL="${2:?Missing value for --url}"
      shift 2
      ;;
    --output)
      OUTPUT="${2:?Missing value for --output}"
      OUTPUT_WAS_SET="true"
      shift 2
      ;;
    --width)
      VIEWPORT_WIDTH="${2:?Missing value for --width}"
      shift 2
      ;;
    --height)
      VIEWPORT_HEIGHT="${2:?Missing value for --height}"
      shift 2
      ;;
    --scale)
      DEVICE_SCALE_FACTOR="${2:?Missing value for --scale}"
      shift 2
      ;;
    --mobile)
      IS_MOBILE="true"
      shift
      ;;
    --no-mobile)
      IS_MOBILE="false"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [[ "$1" == http://* || "$1" == https://* ]]; then
        URL="$1"
      elif [[ -z "$OUTPUT" ]]; then
        OUTPUT="$1"
        OUTPUT_WAS_SET="true"
      else
        echo "Unknown argument: $1" >&2
        usage >&2
        exit 1
      fi
      shift
      ;;
  esac
done

case "$PRESET" in
  desktop)
    VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-1920}"
    VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-1080}"
    DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-1}"
    IS_MOBILE="${IS_MOBILE:-false}"
    if [[ -z "$OUTPUT" ]]; then
      OUTPUT="$REPO_ROOT/thiagobraga-dev-fullpage.png"
    fi
    ;;
  laptop)
    VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-1440}"
    VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-900}"
    DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-1}"
    IS_MOBILE="${IS_MOBILE:-false}"
    OUTPUT="${OUTPUT:-$REPO_ROOT/thiagobraga-dev-laptop.png}"
    ;;
  tablet)
    VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-768}"
    VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-1024}"
    DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-1}"
    IS_MOBILE="${IS_MOBILE:-true}"
    OUTPUT="${OUTPUT:-$REPO_ROOT/thiagobraga-dev-tablet.png}"
    ;;
  mobile)
    VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-390}"
    VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-844}"
    DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-1}"
    IS_MOBILE="${IS_MOBILE:-true}"
    OUTPUT="${OUTPUT:-$REPO_ROOT/thiagobraga-dev-mobile.png}"
    ;;
  custom)
    VIEWPORT_WIDTH="${VIEWPORT_WIDTH:-1920}"
    VIEWPORT_HEIGHT="${VIEWPORT_HEIGHT:-1080}"
    DEVICE_SCALE_FACTOR="${DEVICE_SCALE_FACTOR:-1}"
    IS_MOBILE="${IS_MOBILE:-false}"
    OUTPUT="${OUTPUT:-$REPO_ROOT/thiagobraga-dev-custom.png}"
    ;;
  *)
    echo "Unknown preset: $PRESET" >&2
    usage >&2
    exit 1
    ;;
esac

if [[ -n "${VIEWPORT_WIDTH:-}" || -n "${VIEWPORT_HEIGHT:-}" ]] && [[ "$PRESET" == "desktop" ]]; then
  if [[ "${VIEWPORT_WIDTH:-1920}" != "1920" || "${VIEWPORT_HEIGHT:-1080}" != "1080" ]]; then
    PRESET="custom"
    if [[ "$OUTPUT_WAS_SET" == "false" ]]; then
      OUTPUT="$REPO_ROOT/thiagobraga-dev-custom.png"
    fi
  fi
fi

TMP_DIR="$(mktemp -d /tmp/thiagobraga-playwright-capture.XXXXXX)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

npm --prefix "$TMP_DIR" install --no-save playwright >/dev/null

cd "$TMP_DIR"

SCREENSHOT_URL="$URL" \
SCREENSHOT_OUTPUT="$OUTPUT" \
SCREENSHOT_PRESET="$PRESET" \
VIEWPORT_WIDTH="$VIEWPORT_WIDTH" \
VIEWPORT_HEIGHT="$VIEWPORT_HEIGHT" \
DEVICE_SCALE_FACTOR="$DEVICE_SCALE_FACTOR" \
SCREENSHOT_IS_MOBILE="$IS_MOBILE" \
node --input-type=module <<'NODE'
import { chromium } from 'playwright';

const url = process.env.SCREENSHOT_URL;
const output = process.env.SCREENSHOT_OUTPUT;
const preset = process.env.SCREENSHOT_PRESET;
const viewport = {
  width: Number(process.env.VIEWPORT_WIDTH),
  height: Number(process.env.VIEWPORT_HEIGHT),
};
const deviceScaleFactor = Number(process.env.DEVICE_SCALE_FACTOR);
const isMobile = process.env.SCREENSHOT_IS_MOBILE === 'true';

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: ['--ignore-certificate-errors'],
});

try {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor,
    isMobile,
    hasTouch: isMobile,
    ignoreHTTPSErrors: true,
    colorScheme: 'dark',
  });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('text=Thiago Braga', { timeout: 30000 });
  await page.evaluate(async () => {
    if (document.fonts) await document.fonts.ready;
  });
  await page.waitForTimeout(1500);

  await page.evaluate(async () => {
    const root = document.scrollingElement || document.documentElement;
    let previousY = -1;
    let stableTicks = 0;

    while (stableTicks < 4 && window.scrollY + window.innerHeight < root.scrollHeight - 2) {
      window.scrollBy(0, Math.floor(window.innerHeight * 0.85));
      await new Promise((resolve) => setTimeout(resolve, 300));
      stableTicks = window.scrollY === previousY ? stableTicks + 1 : 0;
      previousY = window.scrollY;
    }
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  const dimensions = await page.evaluate(() => ({
    width: document.scrollingElement?.scrollWidth || document.documentElement.scrollWidth,
    height: document.scrollingElement?.scrollHeight || document.documentElement.scrollHeight,
  }));

  if (dimensions.height <= viewport.height) {
    throw new Error(`Refusing viewport-only screenshot: measured ${dimensions.width}x${dimensions.height}`);
  }

  await page.screenshot({
    path: output,
    fullPage: true,
    type: 'png',
    animations: 'disabled',
  });

  console.log(JSON.stringify({
    output,
    preset,
    ...dimensions,
    viewport: `${viewport.width}x${viewport.height}`,
    deviceScaleFactor,
    isMobile,
    format: 'png',
  }, null, 2));
} finally {
  await browser.close();
}
NODE
