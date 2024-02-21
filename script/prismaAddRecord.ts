import { PrismaClient } from "../prisma/generated/splatoon_client";

const envs = new Map<string, string | undefined>();
envs.set("datasource", process.env.SPLATOON_DB_URL);

async function main() {
    const prisma = new PrismaClient({
        datasources: { db: { url: envs.get("datasource") } },
    });
    // シーズンの追加
    await prisma.season.create({
        data: {
            id: 6,
            name: "2024春 Fresh Season",
            startDate: new Date("2024-03-01T00:00:00.000Z"),
            endDate: new Date("2024-05-31T23:59:59.000Z"),
        },
    });
    const seasonId = 6;

    // メインウェポンの追加
    const mainWeaponLastId = await prisma.mainWeapon.count();
    const mainWeapons = [
        { name: "ガエンFF", seasonId, weaponTypeId: 5 },
        { name: "24式張替傘・甲", seasonId, weaponTypeId: 6 },
    ];
    for (let i = 0; i < mainWeapons.length; i++) {
        const mainWeapon = mainWeapons[i];
        await prisma.mainWeapon.create({
            data: {
                id: mainWeaponLastId + i,
                name: mainWeapon.name,
                seasonId: mainWeapon.seasonId,
                weaponTypeId: mainWeapon.weaponTypeId,
            },
        });
    }

    // ステージの追加
    const stageLastId = await prisma.stage.count();
    const stages = [{ name: "カジキ空港", seasonId }];
    for (let i = 0; i < stages.length; i++) {
        const stage = stages[i];
        await prisma.stage.create({
            data: {
                id: stageLastId + i,
                name: stage.name,
                seasonId: stage.seasonId,
            },
        });
    }

    // ブキの追加
    // weaponTypeIdでソートする
    const weaponLastId = await prisma.weapon.count();
    const weapons = [
        /*
        {
            name: "",
            subWeaponId: ,
            specialWeaponId: ,
            seasonId,
            weaponTypeId: ,
            mainWeaponId: ,
        },
        */
        {
            name: ".52ガロンデコ",
            subWeaponId: 6,
            specialWeaponId: 18,
            seasonId,
            weaponTypeId: 0,
            mainWeaponId: 6,
        },
        {
            name: "ヴァリアブルローラーフォイル",
            subWeaponId: 1,
            specialWeaponId: 18,
            seasonId,
            weaponTypeId: 1,
            mainWeaponId: 16,
        },
        {
            name: "スクイックリンβ",
            subWeaponId: 7,
            specialWeaponId: 2,
            seasonId,
            weaponTypeId: 2,
            mainWeaponId: 17,
        },
        {
            name: "リッター4Kカスタム",
            subWeaponId: 8,
            specialWeaponId: 16,
            seasonId,
            weaponTypeId: 2,
            mainWeaponId: 19,
        },
        {
            name: "4Kスコープカスタム",
            subWeaponId: 8,
            specialWeaponId: 16,
            seasonId,
            weaponTypeId: 2,
            mainWeaponId: 19,
        },
        {
            name: "エクスプロッシャーカスタム",
            subWeaponId: 4,
            specialWeaponId: 17,
            seasonId,
            weaponTypeId: 3,
            mainWeaponId: 26,
        },
        {
            name: "モップリンD",
            subWeaponId: 8,
            specialWeaponId: 6,
            seasonId,
            weaponTypeId: 3,
            mainWeaponId: 57,
        },
        {
            name: "ノーチラス79",
            subWeaponId: 1,
            specialWeaponId: 17,
            seasonId,
            weaponTypeId: 4,
            mainWeaponId: 31,
        },
        {
            name: "ケルビン525デコ",
            subWeaponId: 9,
            specialWeaponId: 0,
            seasonId,
            weaponTypeId: 5,
            mainWeaponId: 34,
        },
        {
            name: "ガエンFF",
            subWeaponId: 10,
            specialWeaponId: 8,
            seasonId,
            weaponTypeId: 5,
            mainWeaponId: 59,
        },
        {
            name: "24式張替傘・甲",
            subWeaponId: 12,
            specialWeaponId: 1,
            seasonId,
            weaponTypeId: 6,
            mainWeaponId: 60,
        },
    ];
    weapons.sort((a, b) => a.weaponTypeId - b.weaponTypeId);
    console.log(weapons);
    for (let i = 0; i < weapons.length; i++) {
        const weapon = weapons[i];
        await prisma.weapon.create({
            data: {
                id: weaponLastId + i,
                name: weapon.name,
                subWeaponId: weapon.subWeaponId,
                specialWeaponId: weapon.specialWeaponId,
                seasonId: weapon.seasonId,
                weaponTypeId: weapon.weaponTypeId,
                mainWeaponId: weapon.mainWeaponId,
            },
        });
    }
}

main().then();
