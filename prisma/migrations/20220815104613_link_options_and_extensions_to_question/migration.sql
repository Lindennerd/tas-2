/*
  Warnings:

  - Added the required column `questionId` to the `Extensions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Extensions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "questionId" TEXT NOT NULL,
    CONSTRAINT "Extensions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Extensions" ("default", "description", "id") SELECT "default", "description", "id" FROM "Extensions";
DROP TABLE "Extensions";
ALTER TABLE "new_Extensions" RENAME TO "Extensions";
CREATE TABLE "new_Option" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "help" TEXT,
    "description" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "questionId" TEXT NOT NULL,
    CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Option" ("default", "description", "help", "id") SELECT "default", "description", "help", "id" FROM "Option";
DROP TABLE "Option";
ALTER TABLE "new_Option" RENAME TO "Option";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
