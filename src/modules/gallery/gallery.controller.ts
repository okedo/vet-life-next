import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller('gallery')
export class GalleryController {
  @Get()
  @Page('gallery')
  getPage(): any {
    return {
      pageTitle: 'Наші пацієнти',
      metaTags: {
        pageContent: 'Ветеринарна клініка Vet Life Чернівці. Наші пацієнти. Домашні улюбленці',
        url: 'http://www.vet-life.site/gallery'
      }
    };
  }
}
