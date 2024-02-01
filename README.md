# Rain Bot

スプラトゥーン3のサーバーの支援を目的としたDiscord Botです。

利用者向けのドキュメントは[こちら](./document/commands.md)。

## 主な機能

### 1. スプラトゥーン3のグループ分け、プライベートマッチの支援

[groupingコマンド](./document/commands.md/#grouping)で、参加しているボイスチャンネルのメンバーをいくつかのグループに分けられます。
また、[random weaponsコマンド](./document/commands.md/#random-weapon)で、ランダムなブキを支給できます。プライベートマッチなどでお使いください。

## Build

prismaクライアントの生成、TypeScriptのコンパイルを行う必要があります。
`$ npm run build`を実行することで、必要な作業を行えます。

## Usage

以下の構成を`.env`に追加。

```shell
NODE_ENV=#development or production
SPLATOON_DB_URL="file:./splatoon.db"
```

以下の構成を`.env.production.local`または`.env.development.local`に追加。

```shell
BOT_TOKEN="bot token"
GROUPING_COMMAND_ID=
PING_COMMAND_ID=
RANDOM_COMMAND_ID=
```

commandのIDは、コマンドが初めて登録される時に`info`レベルでログに記録されます。以降は、`debug`レベルで記録されます。
ログレベルを変更する方法は、[SapphireのGuid](https://www.sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel)を参照してください。

`$ npm run run`で実行できます。

## LICENSE

This software is released under the MIT License, see [LICENSE.txt](LICENSE.txt).
