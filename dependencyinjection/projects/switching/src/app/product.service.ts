import { Product } from './product.model';

export class ProductService {
  getProduct(): Product {
    return new Product('iphone');
  }
}
