import { Controller, Get } from '@nestjs/common';

import { ClientService } from 'src/services/client.service';

@Controller('vet-react')
export class VetReactController {
    constructor(private clientService: ClientService) { }
    @Get('*')
    getPage(): any {
        console.log('react')
        return this.clientService.getApp();
    }
}
