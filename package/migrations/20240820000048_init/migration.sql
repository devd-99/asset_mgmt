-- CreateTable
CREATE TABLE "PendingProjects" (
    "P_id" SERIAL NOT NULL,
    "Overall_status" TEXT NOT NULL,
    "ICOS" BOOLEAN NOT NULL,
    "SDV" BOOLEAN NOT NULL,
    "SDG" BOOLEAN NOT NULL,
    "Due_Diligence" BOOLEAN NOT NULL,
    "Complete" BOOLEAN NOT NULL,

    CONSTRAINT "PendingProjects_pkey" PRIMARY KEY ("P_id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "P_ID" SERIAL NOT NULL,
    "Co2E" DOUBLE PRECISION NOT NULL,
    "Estimated_Worth" DOUBLE PRECISION NOT NULL,
    "Marked_Sold" BOOLEAN NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("P_ID")
);

-- CreateTable
CREATE TABLE "Investor" (
    "Investor_Name" TEXT NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Details" TEXT NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("Investor_Name")
);
