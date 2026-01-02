-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('bags', 'kg', 'lbs');

-- CreateTable
CREATE TABLE "collection_entries" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "unit" "Unit" NOT NULL,
    "location" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collection_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global_stats" (
    "id" SERIAL NOT NULL,
    "total_amount_kg" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_entries" INTEGER NOT NULL DEFAULT 0,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "global_stats_pkey" PRIMARY KEY ("id")
);