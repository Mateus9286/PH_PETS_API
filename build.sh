// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn typeorm migration:generate src/migrations/initial -d src/data-source.ts
yarn typeorm migration:run -d src/data-source