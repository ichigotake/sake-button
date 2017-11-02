# sake-button

[居酒屋選びで困ったときに押すボタン](https://sake-button-cbb77.firebaseapp.com)

[![CircleCI](https://circleci.com/gh/ichigotake/sake-button.svg?style=svg)](https://circleci.com/gh/ichigotake/sake-button)

## Getting started

### セットアップ

```bash
$ npm install && npm init
```

### サーバーを起動する

```bash
$ npm start
```

### Firebase へデプロイ

```bash
$ $(npm bin)/firebase login:ci
$ FIREBASE_PROJECT=your_project_name FIREBASE_DEPLOY_TOKEN=your_token npm run deploy
```
