import { Body, Controller, Get, Post , Param } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findProductId(@Param('id') id: Number) {
    console.log(id);
    return id
  }

  @Post()
  createProduct(@Body() product:ProductDto) : ProductDto {
    return {
      id: 0,
      name: '',
      description: '',
      price: 0
    }

  }
}
