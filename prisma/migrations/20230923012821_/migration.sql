/*
  Warnings:

  - You are about to drop the column `maxMembers` on the `Mode` table. All the data in the column will be lost.
  - Added the required column `maxMember` to the `Mode` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "maxMember" INTEGER NOT NULL,
    "fessMode" BOOLEAN NOT NULL
);
INSERT INTO "new_Mode" ("fessMode", "id", "name") SELECT "fessMode", "id", "name" FROM "Mode";
DROP TABLE "Mode";
ALTER TABLE "new_Mode" RENAME TO "Mode";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
