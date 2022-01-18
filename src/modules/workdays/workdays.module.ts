import { Module } from '@nestjs/common';
import { WorkdaysController } from './workdays.controller';

@Module({
  controllers: [WorkdaysController],
})
export class WorkdaysModule {}
