/*
  Warnings:

  - Added the required column `weaponTypeId` to the `MainWeapon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MainWeapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "weaponTypeId" INTEGER NOT NULL,
    CONSTRAINT "MainWeapon_weaponTypeId_fkey" FOREIGN KEY ("weaponTypeId") REFERENCES "WeaponType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MainWeapon_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MainWeapon" ("id", "name", "seasonId") SELECT "id", "name", "seasonId" FROM "MainWeapon";
DROP TABLE "MainWeapon";
ALTER TABLE "new_MainWeapon" RENAME TO "MainWeapon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
