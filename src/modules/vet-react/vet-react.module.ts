import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ClientMiddleware } from 'src/middlewares/client.middleware';

import { ClientService } from 'src/services/client.service';
import { VetReactController } from './vet-react.controller';

@Module({
  controllers: [VetReactController],
  providers: [ClientService]
})
export class VetReactModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ClientMiddleware)
      .forRoutes(VetReactController);
  }
}
