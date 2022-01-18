import { Controller, Get } from '@nestjs/common';

import { ClientService } from 'src/services/client.service';

@Controller('vet-react')
export class VetReactController {
  constructor(private clientService: ClientService) {}
  @Get('*')
  getPage(): any {
    return this.clientService.getApp();
  }
}
