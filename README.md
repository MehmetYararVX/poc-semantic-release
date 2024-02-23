# POC - Semantic Release

## Development

```sh
npm run dev
```

## Production

```sh
npm run build
npm run start
```

## Release

### With GitHub Personal Access Token

1. Create a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)
2. Create the following secrets:

```env
GH_TOKEN=gh_pat
```

### With GitHub App

1. Create a [GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app)
2. Create the following secrets:

```env
RELEASE_BOT_ID=app_id
RELEASE_BOT_KEY=app_private_key
```
