import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategories } from './app/useCases/categories/createCategory';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategories);

// List products
router.get('/products', (req, res) => {
  res.send('Good');
});

// Create products
router.post('/categories', (req, res) => {
  res.send('Good');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Good');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('Good');
});

// Create orders
router.post('/orders', (req, res) => {
  res.send('Good');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Good');
});

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Good');
});
