# Developer Documentation

## Codebase

This package is written in vanilla JavaScript (for now). It has no external
dependencies, except TypeScript, which is only used during build-time to
generate type definitions, and standard, which is used as a linter.

## Verifying Changes

```bash
npm run lint:fix
```

## Updating type definitions

```
npm run gentypes
```

## Publishing a new version

To push a new version, update the version number in `package.json`, and then run
`npm publish`. Remember to respect semantic versioning!


