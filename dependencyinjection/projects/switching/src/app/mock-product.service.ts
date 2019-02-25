import { Product } from './product.model';
export class MockProductService {
  getProduct(): Product {
    return new Product('samsung');
  }
}
