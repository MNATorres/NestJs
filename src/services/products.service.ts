import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entites/products.entities';
import { CreateProductDto, UpdateProductDto } from './../dto/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Soy una descripción',
      price: 1222,
      stock: 10,
      image: 'soyUnaImagen',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log('payload', payload);

    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return index;
    } else {
      throw new NotFoundException(
        `No existe ${id} por lo que no se puede eliminar`,
      );
    }
  }
}
