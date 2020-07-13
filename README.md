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

# Fitbit WebAPI

> アプリケーションは、ユーザーアクセストークンなしで 1 時間当たり 150 の API リクエストを実行できる
> これらのタイプの API リクエストは Fitbit の一般的なリソース（アクティビティ、フード、ユニットの単位）など非ユーザーデータを取得するためのもの

## レート制限を超えると

> １時間当たりのレート制限を超えると FitbitAPI からアプリケーションの所有者にメールが送信される

## レート制限を提供するヘッダー

> FitbitAPI のレスポンスにはレート制限ステータスを提供するヘッダーが含まれている
> この値は概算であり非同期に更新される残りのリクエストのデクリメントに若干の遅延がある可能性がある
> なので、この値ではなく、自分が行ったリクエストの総数を追跡しないとアプリケーションが予期しない 429 応答を受ける可能性がある

- Fitbit-Rate-Limit-Limit: 呼び出しの割り当て数。
- Fitbit-Rate-Limit-Remaining: レート制限に達する前に残っているコールの数
- Fitbit-Rate-Limit-Reset: レート制限がリセットされるまでの秒数
