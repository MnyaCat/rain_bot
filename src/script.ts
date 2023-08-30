import { PrismaClient } from "@prisma/client";
import { readFileSync, writeFileSync } from "fs";

const datasource = process.env.SPLATOON_DB_URL as string;

const prisma = new PrismaClient({ datasources: { db: { url: datasource } } });

async function main() {
    /*
    [
        { id: 0, name: 'シューター' },
        { id: 1, name: 'ローラー' },
        { id: 2, name: 'チャージャー' },
        { id: 3, name: 'スロッシャー' },
        { id: 4, name: 'スピナー' },
        { id: 5, name: 'マニューバー' },
        { id: 6, name: 'シェルター' },
        { id: 7, name: 'ブラスター' },
        { id: 8, name: 'フデ' },
        { id: 9, name: 'ストリンガー' },
        { id: 10, name: 'ワイパー' }
    ]
    [
        { id: 0, name: 'スプラッシュボム', seasonId: 0 },
        { id: 1, name: 'キューバンボム', seasonId: 0 },
        { id: 2, name: 'クイックボム', seasonId: 0 },
        { id: 3, name: 'スプリンクラー', seasonId: 0 },
        { id: 4, name: 'スプラッシュシールド', seasonId: 0 },
        { id: 5, name: 'タンサンボム', seasonId: 0 },
        { id: 6, name: 'カーリングボム', seasonId: 0 },
        { id: 7, name: 'ロボットボム', seasonId: 0 },
        { id: 8, name: 'ジャンプビーコン', seasonId: 0 },
        { id: 9, name: 'ポイントセンサー', seasonId: 0 },
        { id: 10, name: 'トラップ', seasonId: 0 },
        { id: 11, name: 'ポイズンミスト', seasonId: 0 },
        { id: 12, name: 'ラインマーカー', seasonId: 0 },
        { id: 13, name: 'トーピード', seasonId: 0 }
    ]
    [
        { id: 0, name: 'ウルトラショット', seasonId: 0 },
        { id: 1, name: 'グレートバリア', seasonId: 0 },
        { id: 2, name: 'ショクワンダー', seasonId: 0 },
        { id: 3, name: 'マルチミサイル', seasonId: 0 },
        { id: 4, name: 'アメフラシ', seasonId: 0 },
        { id: 5, name: 'ナイスダマ', seasonId: 0 },
        { id: 6, name: 'ホップソナー', seasonId: 0 },
        { id: 7, name: 'キューインキ', seasonId: 0 },
        { id: 8, name: 'メガホンレーザー5.1ch', seasonId: 0 },
        { id: 9, name: 'ジェットパック', seasonId: 0 },
        { id: 10, name: 'ウルトラハンコ', seasonId: 0 },
        { id: 11, name: 'カニタンク', seasonId: 0 },
        { id: 12, name: 'サメライド', seasonId: 0 },
        { id: 13, name: 'トリプルトルネード', seasonId: 0 },
        { id: 14, name: 'エナジースタンド', seasonId: 0 },
        { id: 15, name: 'デコイチラシ', seasonId: 2 },
        { id: 16, name: 'テイオウイカ', seasonId: 2 }
    ]
    */
    /* const json = JSON.parse(
        readFileSync("./weapons.json").toString()
    ) as Array<any>;
    for (let i = 0; i < json.length; i++) {
        const data = json[i];
        await prisma.weapon.create({
            data: {
                id: i,
                name: data.name,
                subWeaponId: data.subWeaponId,
                specialWeaponId: data.specialWeaponId,
                seasonId: data.seasonId,
                weaponTypeId: data.weaponTypeId,
                mainWeaponId: data.mainWeaponId,
            },
        });
    } */
    const weapons = await prisma.weapon.findMany({
        where: {
            AND: [
                {
                    subWeaponId: undefined,
                    specialWeaponId: 0,
                },
                /* {
                    OR: [
                        {
                            specialWeaponId: 0,
                        },
                    ],
                }, */
            ],
        },
    });
    console.log(weapons);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
