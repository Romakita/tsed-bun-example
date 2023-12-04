import {Example, Format, MinLength} from "@tsed/schema";
import {v4} from "uuid";

export class Product {
  @Format("uuid")
  id: string = v4();

  @MinLength(3)
  @Example('Cancun')
  name: string;

  constructor(opts: Partial<Product> = {}) {
    opts.id && (this.id = opts.id);
    opts.name && (this.name = opts.name);
  }
}
