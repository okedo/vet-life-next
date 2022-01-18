import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller('services')
export class ServicesController {
  @Get()
  @Page('services')
  public getServicesPage(): any {
    return {
      pageTitle: 'Послуги',
    };
  }
}
