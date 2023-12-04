import {Controller, Inject} from "@tsed/di";
import {Get, Returns} from "@tsed/schema";
import {ProductsService} from "../../services/ProductsService";
import {Product} from "../../models/Product";

@Controller("/products")
export class ProductsController {
  @Inject(ProductsService) // we need to give the token explicitly because bun doesn't support emitDecoratorMetadata
  protected productsService: ProductsService;

  @Get("/")
  @Returns(200, Array).Of(Product).ContentType("application/json")
  getAll() {
    return this.productsService.getAll();
  }
}
