

# echoic.space

## Develop

Builds `:browser` and `node-repl` (for SSR).

Install all dependencies.

```bash
npm run install
```

Watch compile with with hot reloading, using the `browser` target as example.

```
npm run watch:browser
```

The above command will also start a server at port `5000` so that you can open `http://localhost:5000` and load the website.

### Production release

Build production builds for each target.

```bash
npm run release:browser
```

