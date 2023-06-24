import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const {
      name,
      price,
      category,
      ingredients,
      description,
    } = req.body;

    const product = await Product.create({
      name,
      price: Number(price),
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
