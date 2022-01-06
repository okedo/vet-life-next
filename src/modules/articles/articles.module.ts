import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ArticlesController } from './articles.controller';

@Module({
  controllers: [ArticlesController],
  imports: [HttpModule]
})
export class ArticlesModule { }
