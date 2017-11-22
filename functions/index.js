const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const urls = [
  'https://tabelog.com/tokyo/A1316/A131601/13176012/',
  'https://tabelog.com/tokyo/A1301/A130101/13016562/',
  'https://tabelog.com/tokyo/A1316/A131601/13034404/',
  'https://retty.me/area/PRE13/ARE1/SUB105/100000703400/',
  'https://junmaishu.net/',
  'https://tabelog.com/tokyo/A1305/A130503/13187906/',
  'https://tabelog.com/tokyo/A1316/A131603/13122590/',
  'https://tabelog.com/tokyo/A1310/A131001/13171817/',
  'http://sake-genkabar.com/',
  'https://tabelog.com/tokyo/A1304/A130401/13203013/',
  'https://r.gnavi.co.jp/p746600/',
  'https://r.gnavi.co.jp/kakoiya7/',
];

exports.pick = functions.https.onRequest((request, response) => {
  let picked = {
    url: urls[Math.floor(Math.random() * urls.length)],
  };
  response.send(JSON.stringify(picked));
});

exports.list = functions.https.onRequest((request, response) => {
  let list = urls.map((u) => {
    return {"url": u}
  });
  response.send(JSON.stringify(list));
});
