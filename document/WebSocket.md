# Minecraft -> Discord へのチャット転送

Minecraft(LiteLoaderBDS, Node.js)から、Discord Bot(discord.js, Node.js)へ WebSocket でチャットを転送する。

1. Minecraft で`onJoin`, `onLeft`, `onRespawn`, `onPlayerDie`, `onPlayerCmd`, `onChat`, `onConsoleCmd`を検知
2. Minecraft -> Discord Bot へ情報を送信
3. Discord Bot が WebSocket 通信を受信
4. EventEmitter でイベントを発生させる
5. Listener がイベントを検知し、Discord へ送信

## WebSocket 通信のフォーマット

```json
{
    "eventName": "{EVENT_NAME}",
    "eventData": {}
}
```

### コンポーネント

#### Player

```json
{
    "name": "{PLAYER_NAME}",
    "xuid": "{XUID}",
    "permLevel": 0, // 0-4
    "gameMode": 0 // 0-2, 6
}
```

#### FloatPos

```json
{
    "x": 0.0,
    "y": 0.0,
    "z": 0.0,
    "dim": "{DIMENSION_NAME}",
    "dimid": 0 // -1, 0~2
}
```

#### IntPos

```json
{
    "x": 0,
    "y": 0,
    "z": 0,
    "dim": "{DIMENSION_NAME}",
    "dimid": 0 // -1, 0~2
}
```

#### Entity

```json
{
    "name": "{ENTITY_NAME}",
    "type": "{ENTITY_TYPE}",
    "id": 0,
    "pos": "$FloatPos",
    "blockPos": "$IntPos"
}
```

### onJoin

```json
{
    "eventName": "onJoin",
    "eventData": {
        "player": "$Player"
    }
}
```

### onLeft

```json
{
    "eventName": "onLeft",
    "eventData": {
        "player": "$Player"
    }
}
```

### onRespawn

```json
{
    "eventName": "onRespawn",
    "eventData": {
        "player": "$Player",
        "pos": "$FloatPos",
        "blockPos": "$IntPos"
    }
}
```

### onPlayerDie

```json
{
    "eventName": "onPlayerDie",
    "eventData": {
        "player": "$Player",
        "source": "$Entity",
        "lastDeathPos": "$IntPos",
    }
}
```

### onPlayerCmd

```json
{
    "eventName": "onPlayerCmd",
    "eventData": {
        "player": "$Player",
        "command": "{COMMAND}"
    }
}
```

### onChat

```json
{
    "eventName": "onChat",
    "eventData": {
        "player": "$Player",
        "message": "{MESSAGE}"
    }
}
```

### onConsoleCmd

```json
{
    "eventName": "onConsoleCmd",
    "eventData": {
        "command": "{COMMAND}"
    }
}
```
