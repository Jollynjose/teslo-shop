import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IProduct } from '../../../interfaces/products';
import Product from '../../../models/Products';

type Data =
  | {
      message: string;
    }
  | IProduct;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res);
    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}

const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();

  const { slug } = req.query;

  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();

  if (!product) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(product);
};
