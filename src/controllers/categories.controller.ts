import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    console.log(`product ${productId} and ${id}`);
    return `product ${productId} and ${id}`;
  }
}
