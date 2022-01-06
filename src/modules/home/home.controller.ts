import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class HomeController {
  @Get()
  @Page('home')
  getHello(): any {
    return { pageTitle: 'Vet life' }
  }
}
