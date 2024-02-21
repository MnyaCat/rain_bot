# Change Log

Rain Botの変更履歴を記録する文書です。

## 0.3.3 - 2024-02-22

### Added

- スプラトゥーン3のver7.0.0で追加されるステージ、メインウェポン、ブキを追加

### Changed

- random-weaponコマンドの再ロールボタンのID検証方法を他のコマンドと統一しました

## 0.3.2 - 2024-02-14

### Changed

- randomコマンドのサブコマンド(weapon, subweapon, specialweapon, weapontype, rule, stage)をそれぞれ独立したコマンドとして実装しました
- random系のコマンドがボイスチャンネルに参加していなくても実行できるようになりました。`1つのみ抽選する`オプションが自動で有効になります。
- `1つのみ抽選する`オプションが有効になっている場合は、ボイスチャンネルに参加していなくても再ロールできるようになりました
- 一部のコマンドやオプションの説明を改善しました

### Removed

- random subweaponコマンドの`season`オプションを削除しました

## 0.3.1 - 2024-02-02

### Changed

- 再ロールの際に使うオプションの情報を、埋め込みのフッターからボタンの内部IDへ移動しました
- randomコマンドで条件に合うものが見つからない場合のエラーメッセージを改善しました

## 0.3.0 - 2024-01-22

### Added

- [random rule](./document/commands.md/#ランダム-ルール--random-rule)を追加
- [random stage](./document/commands.md/#ランダム-ルール--random-rule)を追加
- [random weapontype](./document/commands.md/#ランダム-ブキタイプ--random-weapontype)を追加
- [grouping](./document/commands.md/#グルーピング--grouping)に対象のメンバーを追加する`additional-member`オプションを追加

### Changed

- [grouping](./document/commands.md/#グルーピング--grouping)は、前回とグループ分けの結果が同じ場合に最大10回までグループ分けをやり直すようになりました
- コマンド名、オプション名に日本語のローカライズを追加しました
- 一部のコマンドやオプションの説明を改善しました

### Removed

- Amethyst Serverの管理機能を削除しました

### Fixed

- [random subweapon](./document/commands.md/#ランダム-サブウェポン--random-subweapon)の`season`オプションが適応されていなかった問題を修正
- [random specialweapon](./document/commands.md/#ランダム-スペシャルウェポン--random-specialweapon)の`season`オプションが適応されていなかった問題を修正

## 0.2.0 - 2023-09-18

### Added

- [random weapon](./document/commands.md/#ランダム-ブキ--random-weapon)に実装されたシーズン、ブキタイプで絞り込むオプションを追加
- [random weapon](./document/commands.md/#ランダム-ブキ--random-weapon)に再ロールボタンを追加
- [grouping](./document/commands.md/#グルーピング--grouping)にメンバーを対象から外す`exlude`オプションを追加

### Changed

- ボイスチャンネルのメンバーを対象にするコマンドは、Botを対象から外すようになりました

## [0.1.0] - 2023-08-31

### Changed

- [random weapon](./document/commands.md/#random-weapon)の対象にver5.0で追加されるブキを追加

## 0.0.1

Rain Botのリリース。
