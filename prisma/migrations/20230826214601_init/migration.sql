/*
  Warnings:

  - Added the required column `mainWeaponId` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "MainWeapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    CONSTRAINT "MainWeapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subWeaponId" INTEGER NOT NULL,
    "specialWeaponId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "weaponTypeId" INTEGER NOT NULL,
    "mainWeaponId" INTEGER NOT NULL,
    CONSTRAINT "Weapon_mainWeaponId_fkey" FOREIGN KEY ("mainWeaponId") REFERENCES "MainWeapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_subWeaponId_fkey" FOREIGN KEY ("subWeaponId") REFERENCES "SubWeapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_specialWeaponId_fkey" FOREIGN KEY ("specialWeaponId") REFERENCES "SpecialWeapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_weaponTypeId_fkey" FOREIGN KEY ("weaponTypeId") REFERENCES "WeaponType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Weapon" ("id", "name", "seasonId", "specialWeaponId", "subWeaponId", "weaponTypeId") SELECT "id", "name", "seasonId", "specialWeaponId", "subWeaponId", "weaponTypeId" FROM "Weapon";
DROP TABLE "Weapon";
ALTER TABLE "new_Weapon" RENAME TO "Weapon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
