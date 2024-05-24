import { Controller, Get, Param } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getBrands() {
    return 'Somos los brands';
  }

  @Get(':brand/:id')
  getBrand(@Param('brand') brand: string, @Param('id') id: number) {
    return `Soy un brand, mi nombre es ${brand} y mi ID es ${id}`;
  }
}
