export interface Order {
  _id: string;
  table: string;
  status: 'AWAITING' | 'IN_PRODUCTION' | 'DONE';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      price: number;
      imagePath: string;
    }
  }[];
}
