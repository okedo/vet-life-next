import { Controller, Get } from '@nestjs/common';
import { Page } from 'src/shared/decorators/page.decorator';

const phoneNumberList = ['+38 0661060107', '+38 0681080109'];
const address = 'м.Чернівці вул. Південно-Кільцева 2A 2-поверх';
const email = 'the.vetlife.cv@gmail.com';

@Controller('contacts')
export class ContactsController {
  @Get()
  @Page('contacts')
  getContacts(): any {
    return {
      pageTitle: 'Контакти',
      phoneNumberList,
      address,
      email,
      metaTags: {
        pageContent: 'Ветеринарна клініка Vet Life Чернівці. Наші контакти. +38 0661060107; +38 0681080109;',
        url: 'http://www.vet-life.site/contacts'
      }
    };
  }
}
