import { Controller, Get, Param } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getControllers(){
    return "Estos son los controller"
  }

  @Get(':id/:name')
  getController(@Param('id') id:number, @Param('name') name: string){
    return `Soy un controller y mi id es ${id}, y mi nombre es ${name}`
  }

}
