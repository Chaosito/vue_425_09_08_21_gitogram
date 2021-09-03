# gitogram2

## Project setup
```
npm install
```

### for develop (serve) create file with app-settings
.env.local or .env in the root directory

### for production (build) create file
.env.production.local or .env.production in the root directory

### place in created .env-files your github-app data (ClientId & ClientSecret)
Like a:
```
VUE_APP_GITHUB_AUTH_CLIENT_ID={ID_VAL}
VUE_APP_GITHUB_AUTH_CLIENT_SECRET={SECRET_VAL}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
