import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class HomeController {
  constructor() { }

  @Get()
  @Page('home')
  getHello(): any {
    return { pageTitle: 'Vet life' }
  }
}
