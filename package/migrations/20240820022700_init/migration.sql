/*
  Warnings:

  - The primary key for the `PendingProjects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `P_id` on the `PendingProjects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PendingProjects" DROP CONSTRAINT "PendingProjects_pkey",
DROP COLUMN "P_id",
ADD COLUMN     "P_ID" SERIAL NOT NULL,
ADD CONSTRAINT "PendingProjects_pkey" PRIMARY KEY ("P_ID");

-- CreateTable
CREATE TABLE "Project_Details" (
    "P_ID" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Owner_Org" TEXT NOT NULL,

    CONSTRAINT "Project_Details_pkey" PRIMARY KEY ("P_ID")
);

-- AddForeignKey
ALTER TABLE "PendingProjects" ADD CONSTRAINT "PendingProjects_P_ID_fkey" FOREIGN KEY ("P_ID") REFERENCES "Project_Details"("P_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_P_ID_fkey" FOREIGN KEY ("P_ID") REFERENCES "Project_Details"("P_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
