import { Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { ContactsModule } from './../contacts/contacts.module';
import { HomeController } from './home.controller';

@Module({
  imports: [ArticlesModule, ContactsModule],
  controllers: [HomeController],
  providers: [],
})
export class HomeModule { }
