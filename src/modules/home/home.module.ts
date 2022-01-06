import { Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { ContactsModule } from './../contacts/contacts.module';
import { HomeController } from './home.controller';
import { GalleryModule } from '../gallery/gallery.module';
import { ServicesModule } from '../services/services.module';
import { StaffModule } from '../staff/staff.module';
import { TherapyModule } from '../therapy/therapy.module';
import { WorkdaysModule } from '../workdays/workdays.module';

@Module({
  imports: [ArticlesModule, ContactsModule, GalleryModule, ServicesModule, StaffModule, TherapyModule, WorkdaysModule],
  controllers: [HomeController],
  providers: [],
})
export class HomeModule { }
