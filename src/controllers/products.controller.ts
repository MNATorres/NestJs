import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    const id = parseInt(productId, 10);
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Acción de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':idProduct')
  update(@Param('idProduct') idProduct: string, @Body() payload: any) {
    const index = parseInt(idProduct, 10);
    return this.productsService.update(index, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const index = parseInt(id, 10);
    return this.productsService.delete(index);
  }
}
