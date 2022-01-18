import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class HomeController {
  @Get()
  @Page('home')
  getHello(): any {
    return {
      pageTitle: 'Vet life', metaTags: {
        pageContent: 'Ветеринарна клініка Vet Life Чернівці. Ветеринарна допомога. Лікування тварин. &#9742; +38 0661060107; +38 0681080109;.'
      }
    };
  }
}
