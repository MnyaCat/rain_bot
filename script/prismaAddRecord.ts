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
            id: 7,
            name: "2024夏 Sizzle Season",
            startDate: new Date("2024-06-01T00:00:00.000Z"),
            endDate: new Date("2024-08-31T23:59:59.000Z"),
        },
    });
    const seasonId = 7;

    // メインウェポンの追加
    const mainWeaponLastId = await prisma.mainWeapon.count();
    const mainWeapons = [
        { name: "フルイドV", seasonId, weaponTypeId: 9 },
        { name: "デンタルワイパー", seasonId, weaponTypeId: 10 },
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

    // 24式張替傘・甲の名前を変更
    await prisma.mainWeapon.update({
        where: { id: 60 },
        data: { name: "24式張替傘" },
    });
    // 14式竹筒銃の名前に誤字があったので修正
    await prisma.mainWeapon.update({
        where: { id: 20 },
        data: { name: "14式竹筒銃" },
    });

    // ステージの追加
    const stageLastId = await prisma.stage.count();
    const stages = [{ name: "リュウグウターミナル", seasonId }];
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
            name: "ロングブラスターカスタム",
            subWeaponId: 0,
            specialWeaponId: 16,
            seasonId,
            weaponTypeId: 7,
            mainWeaponId: 42,
        },
        {
            name: "14式竹筒銃・乙",
            subWeaponId: 5,
            specialWeaponId: 15,
            seasonId,
            weaponTypeId: 2,
            mainWeaponId: 20,
        },
        {
            name: "ハイドラントカスタム",
            subWeaponId: 10,
            specialWeaponId: 18,
            seasonId,
            weaponTypeId: 4,
            mainWeaponId: 29,
        },
        {
            name: "イグザミナー・ヒュー",
            subWeaponId: 0,
            specialWeaponId: 11,
            seasonId,
            weaponTypeId: 4,
            mainWeaponId: 58,
        },
        {
            name: "ガエンFFカスタム",
            subWeaponId: 2,
            specialWeaponId: 13,
            seasonId,
            weaponTypeId: 5,
            mainWeaponId: 59,
        },
        {
            name: "24式張替傘・乙",
            subWeaponId: 11,
            specialWeaponId: 17,
            seasonId,
            weaponTypeId: 6,
            mainWeaponId: 60,
        },
        {
            name: "フルイドV",
            subWeaponId: 7,
            specialWeaponId: 10,
            seasonId,
            weaponTypeId: 9,
            mainWeaponId: 61,
        },
        {
            name: "フルイドVカスタム",
            subWeaponId: 9,
            specialWeaponId: 6,
            seasonId,
            weaponTypeId: 9,
            mainWeaponId: 61,
        },
        {
            name: "デンタルワイパーミント",
            subWeaponId: 1,
            specialWeaponId: 1,
            seasonId,
            weaponTypeId: 10,
            mainWeaponId: 62,
        },
        {
            name: "デンタルワイパースミ",
            subWeaponId: 4,
            specialWeaponId: 9,
            seasonId,
            weaponTypeId: 10,
            mainWeaponId: 62,
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
