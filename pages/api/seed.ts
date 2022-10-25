import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';
import Product from '../../models/Products';

type Data = {
  message: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'no tiene acceso a esté servicio' });
  }
  try {
    await db.connect();

    await Product.deleteMany();

    await Product.insertMany(seedDatabase.initialData.products);

    await db.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error as string });
  }

  res.status(201).json({ message: 'Proceso finalizado' });
}
