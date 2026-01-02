-- CreateTable
CREATE TABLE "collection_entries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "location" TEXT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "global_stats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_amount_kg" REAL NOT NULL DEFAULT 0,
    "total_entries" INTEGER NOT NULL DEFAULT 0,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
