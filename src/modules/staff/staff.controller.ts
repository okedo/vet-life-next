import { Controller, Get } from '@nestjs/common';
import { Page } from 'src/shared/decorators/page.decorator';

@Controller('staff')
export class StaffController {
  @Get()
  @Page('staff')
  getHello(): any {
    return {
      pageTitle: 'Наш персонал',
      metaTags: {
        pageContent: 'Наш персонал.',
        url: 'http://www.vet-life.site/staff'
      }
    };
  }
}
