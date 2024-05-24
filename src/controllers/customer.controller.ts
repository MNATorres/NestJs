import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getCustomers() {
    return 'este es el sitio de los customers';
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return `Es la alerta de customer número ${id}`
  }

}
