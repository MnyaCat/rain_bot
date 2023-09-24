-- CreateTable
CREATE TABLE "Rule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "maxMembers" INTEGER NOT NULL,
    "fessMode" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ModeOnRule" (
    "ruleId" INTEGER NOT NULL,
    "modeId" INTEGER NOT NULL,

    PRIMARY KEY ("ruleId", "modeId"),
    CONSTRAINT "ModeOnRule_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ModeOnRule_modeId_fkey" FOREIGN KEY ("modeId") REFERENCES "Mode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    CONSTRAINT "Stage_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SpecialWeapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    CONSTRAINT "SpecialWeapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeaponType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubWeapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    CONSTRAINT "SubWeapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subWeaponId" INTEGER NOT NULL,
    "specialWeaponId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "weaponTypeId" INTEGER NOT NULL,
    CONSTRAINT "Weapon_subWeaponId_fkey" FOREIGN KEY ("subWeaponId") REFERENCES "SubWeapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_specialWeaponId_fkey" FOREIGN KEY ("specialWeaponId") REFERENCES "SpecialWeapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_weaponTypeId_fkey" FOREIGN KEY ("weaponTypeId") REFERENCES "WeaponType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL
);
