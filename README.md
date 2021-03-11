## Sveriges Allmännyttas Utveckingsportal :rocket:

This is the source code for the community site for Allmännyttan Utveckling.

## Getting started

### [STUDIO](https://github.com/Iteam1337/sadev-test/tree/main/studio)

Sanity project

Install sanity cli and login to sanity

```
npm install -g @sanity/cli
sanity login
```

Install the dependencies and start the project

```
nvm use
npm insall
npm run start
```

The Sanity CMS is now running on [http://localhost:3333](http://localhost:3333)

### [WEB](https://github.com/Iteam1337/sadev-test/tree/main/web)

Gatsby project

First you have to set the `.env` variable.
Start by setting the env variable inside `.env.development`

```
SANITY_READ_DATA_TOKEN=<YOUR TOKEN>
```

Insall dependencies and start the project

```
nvm use
npm install
npm run start
```

The web UI is now running at [http://localhost:8000](http://localhost:8000)

You can find the graphql schema at [http://localhost:8000/\_graphql](http://localhost:8000/_graphql)
