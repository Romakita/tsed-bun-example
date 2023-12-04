import {Injectable} from "@tsed/di";
import {Product} from "../models/Product";

@Injectable()
export class ProductsService {
  getAll() {
    return [
      new Product({
        id: "0b3ec7d4-7978-4ea2-a1d3-e799365043b6",
        name: "Product 1"
      }),
      new Product({
        id: "7968ae53-8e6c-4b0c-aa54-29e927dd909b",
        name: "Product 2"
      })
    ];
  }
}
