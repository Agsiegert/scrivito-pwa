# Scrivito PWA
This is a Progressive Web App build with Create-React-App for the Scrivito CMS. [Scrivito](https://scrivito.com) is a serverless ReactJS based Content Management System.

I've also developed some new widgets and improved some of the original Scrivito widgets.

You need a Scrivito, Github and a [Netlify account](https://netlify.com)

## One-click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/capriosa/scrivito-pwa)

Login to your Github, Netlify and Scrivito accounts.

### Installation
1. Click on the Deploy button above and follow the installation steps.
This will create a new Github Repo and a new Netlify Site.
2. Visit the Scrivito Website, click on Websites -> Details -> Deployments -> Edit and add the URL of your new Netlify Site.
3. Clone this repo.
4. Open "src/config/scrivito.js".
5. Put your Scrivito Tenant in this file like this:
SCRIVITO_TENANT="9c88fXXXXXXXXXXXXX1a1"
6. You can find your Scrivito Tenant on your settings page of your Scrivito account.
7. Commit your changes to your new Github repo.

A Netlify deploy should start automatically which will run the NMP build process for the ReactJS App.

Visit your site and have fun.

For local development:
Go to your Repo.

```$ npm install```

Start a local server with:

```$ npm start```

Start a local build:

```$ npm run build```
