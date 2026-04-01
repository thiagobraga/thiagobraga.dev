#!/bin/sh
set -e

bun i
chown -R bun:bun .
# exec tail -f /dev/null
exec su-exec bun "$@"
