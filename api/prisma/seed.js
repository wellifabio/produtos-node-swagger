const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const produtos = require("./produtos.json");

async function main() {
    for (const produto of produtos) {
        await prisma.produto.create({
            data: produto
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });