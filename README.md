# Fitbit の WebAPI を試してみる

## Fitbit のデベロッパーサイト

[Fitbit Developer Site](https://dev.fitbit.com/)

## bearer token の取得

### 参考

認証画面を通してリダイレクトされるページのクエリストリングスから取得しているため画面を利用しないで取得できる方法を考える

- [Fitbit の API を手っ取り早く試してみる方法: Qiita](https://qiita.com/makopo/items/32f41128c2e055cec68f)
- [fitbit API を使いたいので OAuth2 を学ぶ: Developers.IO](https://dev.classmethod.jp/articles/fitbit-oauth2/)

## WebAPI を使う

### 参考

- [Fitbit WebAPI Reference](https://dev.fitbit.com/build/reference/web-api/)

### src/models

- base.js
- user.js
- heartrate.js

## config

- dotenv を利用し、/.env に以下の変数を定義

`.env`

```
FITBIT_BEARER_TOKEN=xxxxxx
```
