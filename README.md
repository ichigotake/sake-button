# sake-button

[居酒屋選びで困ったときに押すボタン](https://sake-button-cbb77.firebaseapp.com)

## Getting started

### セットアップ

```bash
$ npm init
$ cd functions && npm install && cd ..
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
