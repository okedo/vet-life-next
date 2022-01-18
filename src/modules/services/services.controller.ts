import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller('services')
export class ServicesController {
  @Get()
  @Page('services')
  public getServicesPage(): any {
    return {
      pageTitle: 'Послуги',
      metaTags: {
        pageContent: 'Ветеринарна клініка Vet Life Чернівці. Наші послуги.',
        url: 'http://www.vet-life.site/services'
      }
    };
  }
}
