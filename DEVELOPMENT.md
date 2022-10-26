# Developer Documentation

## Codebase

This package is written in vanilla TypeScript (for now) and has no external
dependencies. It used to be written in JavaScript + JSDoc; but it was proving
increasingly difficult to write JSDoc as easily as TypeScript.

We'll only support the latest stable version of Node.js (not LTS), and the
latest stable version of TypeScript. There IS a good chance however, that this
package will work on older versions of Node.js and TypeScript. It does not
depend on any bleeding edge features.

## Run linters and unit tests

```bash
npm run test
```

## Build the Package

```bash
npm run build
```

## Publish a new version

To push a new version, update the version number in `package.json`, and then run
`npm publish`. Remember to respect semantic versioning!
