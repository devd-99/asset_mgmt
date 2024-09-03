-- AlterTable
ALTER TABLE "PendingProjects" ALTER COLUMN "P_ID" DROP DEFAULT;
DROP SEQUENCE "PendingProjects_P_ID_seq";

-- AlterTable
ALTER TABLE "Portfolio" ALTER COLUMN "P_ID" DROP DEFAULT;
DROP SEQUENCE "Portfolio_P_ID_seq";
