#!/bin/sh
set -e

# Change ownership to 'bun' user
chown -R bun:bun /app

# Run bun install as 'bun' user
su-exec bun bun install

# Execute CMD as 'bun' user
exec su-exec bun "$@"
