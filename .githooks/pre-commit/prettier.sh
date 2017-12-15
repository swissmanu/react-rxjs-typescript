#!/bin/sh

FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '(\.tsx|\.ts|\.js)$' | tr '\n' ' ')
[ -z "$FILES" ] && exit 0

# Prettify all staged files
echo "$FILES" | xargs ./node_modules/.bin/prettier --write --single-quote --print-width 120

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
