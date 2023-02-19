import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
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
  findProductId(@Param('id') id: number) {
    console.log(id);
    return id;
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createProduct(@Body() product: ProductDto): ProductDto {
    return {
      id: 0,
      name: '',
      description: '',
      price: 0,
    };
  }
}
