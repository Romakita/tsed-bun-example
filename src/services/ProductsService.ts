import {Injectable} from "@tsed/di";

@Injectable()
export class ProductsService {
  getAll() {
    return [
      {
        id: 1,
        name: "Product 1"
      },
      {
        id: 2,
        name: "Product 2"
      }
    ];
  }
}
