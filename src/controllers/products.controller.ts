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
  // ParseIntPipe
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {CreateProductDto, UpdateProductDto} from './../dto/products.dto';

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
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Acción de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':idProduct')
  update(@Param('idProduct') idProduct: string, @Body() payload: UpdateProductDto) {
    const index = parseInt(idProduct, 10);
    return this.productsService.update(index, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const index = parseInt(id, 10);
    return this.productsService.delete(index);
  }
}
