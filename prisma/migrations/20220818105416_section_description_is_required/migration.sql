/*
  Warnings:

  - Made the column `description` on table `Section` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "manifestId" TEXT,
    "documentId" TEXT,
    CONSTRAINT "Section_manifestId_fkey" FOREIGN KEY ("manifestId") REFERENCES "Manifest" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Section_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("description", "documentId", "id", "manifestId", "name") SELECT "description", "documentId", "id", "manifestId", "name" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
