import prisma from './lib/prisma.js'

export default async (req, res) => {
  const users = await prisma.user.findMany()

  const data = {
    msg: 'Hello world!',
    data: users
  }

  res.status(200).json(data)
}
