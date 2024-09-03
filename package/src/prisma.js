const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    query: {
      async $allOperations({ operation, model, args, query }) {
        const before = Date.now();
        const result = await query(args);
        const after = Date.now();
        console.log(`${model}.${operation} took ${after - before}ms`);
        return result;
      },
    },
  });
};

// In JavaScript, we don't need to explicitly define the PrismaClientSingleton type

// We can simplify this part in JavaScript
const globalForPrisma = global;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;