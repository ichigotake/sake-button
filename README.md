# sake-button

[居酒屋選びで困ったときに押すボタン](https://sake-button-cbb77.firebaseapp.com)

[![CircleCI](https://circleci.com/gh/ichigotake/sake-button.svg?style=svg)](https://circleci.com/gh/ichigotake/sake-button)

## Patches welcome!

[functions/index.js を編集](https://github.com/ichigotake/sake-button/edit/master/functions/index.js) してお店の URL を追加してください。

次の条件を満たしているとベターです。

- 東京都もしくは東京都近郊
- お酒の種類が豊富、もしくはお酒に合う食品がある

## Getting started

### セットアップ

```bash
$ npm install && npm run init
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
