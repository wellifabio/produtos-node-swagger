const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const produto = await prisma.produto.create({
            data: req.body
        });
        return res.status(201).json(produto);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const read = async (req, res) => {
    if (req.params.id !== undefined) {
            const os = await prisma.produto.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            return res.json(os);
    } else {
        const produtos = await prisma.produto.findMany();
        return res.json(produtos);
    }
};

const update = async (req, res) => {
    try {
        const produto = await prisma.produto.update({
            where: {
                id: parseInt(req.body.id)
            },
            data: req.body
        });
        return res.status(202).json(produto);
    } catch (error) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }
};

const del = async (req, res) => {
    try {
        const produto = await prisma.produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).json(produto);
    } catch (error) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }
}

module.exports = {
    create,
    read,
    update,
    del
};