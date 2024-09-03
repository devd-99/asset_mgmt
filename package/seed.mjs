import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed PendingProjects
  await prisma.pendingProjects.createMany({
    data: [
      { Overall_status: 'In Progress', ICOS: true, SDV: false, SDG: true, Due_Diligence: false, Complete: false },
      { Overall_status: 'Completed', ICOS: true, SDV: true, SDG: true, Due_Diligence: true, Complete: true },
      { Overall_status: 'On Hold', ICOS: false, SDV: true, SDG: false, Due_Diligence: true, Complete: false },
    ],
  })

  // Seed Portfolio
  await prisma.portfolio.createMany({
    data: [
      { Co2E: 100.5, Estimated_Worth: 1000000, Marked_Sold: false },
      { Co2E: 200.75, Estimated_Worth: 2000000, Marked_Sold: true },
      { Co2E: 150.25, Estimated_Worth: 1500000, Marked_Sold: false },
    ],
  })

  // Seed Investor
  await prisma.investor.createMany({
    data: [
      { Investor_Name: 'John Doe', Amount: 500000, Details: 'Individual investor' },
      { Investor_Name: 'Jane Smith', Amount: 1000000, Details: 'Corporate investor' },
      { Investor_Name: 'Green Funds Inc.', Amount: 2000000, Details: 'Environmental investment fund' },
    ],
  })

  console.log('Sample data seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })