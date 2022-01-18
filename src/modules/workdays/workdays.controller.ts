import { Controller, Get } from '@nestjs/common';
import { Page } from 'src/shared/decorators/page.decorator';

@Controller('workdays')
export class WorkdaysController {
  @Get()
  @Page('workdays')
  getPage(): any {
    return {
      pageTitle: 'Графік роботи',
      metaTags: {
        pageContent: 'Графік роботи Ветеринарної клініки Vet Life Чернівці',
        url: 'http://www.vet-life.site/workdays'
      }
    };
  }
}
