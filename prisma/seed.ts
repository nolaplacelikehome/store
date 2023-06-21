import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
			name: 'test',
      email: 'test@test.com',
      password: 'test',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "test1@test.com" },
    update: {},
    create: {
			name: 'test1',
      email: "test1@test.com",
      password: 'test1',
    },
  });

  

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });