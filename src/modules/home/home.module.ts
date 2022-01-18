import { Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { ContactsModule } from './../contacts/contacts.module';
import { HomeController } from './home.controller';
import { GalleryModule } from '../gallery/gallery.module';
import { ServicesModule } from '../services/services.module';
import { StaffModule } from '../staff/staff.module';
import { TherapyModule } from '../therapy/therapy.module';
import { VetReactModule } from '../vet-react/vet-react.module';
import { WorkdaysModule } from '../workdays/workdays.module';

@Module({
  imports: [
    ArticlesModule,
    ContactsModule,
    GalleryModule,
    ServicesModule,
    StaffModule,
    TherapyModule,
    VetReactModule,
    WorkdaysModule,
  ],
  controllers: [HomeController],
  providers: [],
})
export class HomeModule {}
