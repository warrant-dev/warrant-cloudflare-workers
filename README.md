# Warrant Cloudflare Workers

This repository contains templates of using Warrant in a Cloudflare Worker in difference scenarios. Clone the repository or use [`wrangler generate`](https://developers.cloudflare.com/workers/wrangler/cli-wrangler/commands/#generate) to get started with any of the templates.

## Local Development

### Secrets &amp; Environment Variables

For local development, create a `.dev.vars` file and add your Warrant API key [from the dashboard](https://app.warrant.dev/account):

```
WARRANT_API_KEY=your_warrant_api_key
```

## Publishing to Cloudflare

### Secrets &amp; Environment Variables

When publishing a worker to Cloudflare, add your Warrant API key [from the dashboard](https://app.warrant.dev/account) as a secret accessible to the worker [using wrangler](https://developers.cloudflare.com/workers/platform/environment-variables/#add-secrets-to-your-project).
