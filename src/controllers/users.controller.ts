import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Somos muchos usuarios';
  }

  @Get(':id')
  getUser(@Param('id') id: number){
    return `Soy un único usuario y mi ID es ${id}`
  }

  @Post()
  createUser(@Body() payload: any) {
    return {
      payload,
      message: "Se está creando un nuevo usuario"
    }
  }
}
