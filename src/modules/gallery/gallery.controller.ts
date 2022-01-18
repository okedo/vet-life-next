import { Controller, Get } from '@nestjs/common';
import { Page } from '../../shared/decorators/page.decorator';

@Controller('gallery')
export class GalleryController {
  @Get()
  @Page('gallery')
  getPage(): any {
    return { pageTitle: 'Наші пацієнти' };
  }
}
