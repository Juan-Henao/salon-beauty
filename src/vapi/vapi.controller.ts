import { Body, Controller, Get, Post } from '@nestjs/common';
import { VapiService } from './vapi.service';

@Controller('vapi')
export class VapiController {
    constructor(private readonly vapiService:VapiService) {}
    @Get()
    async getVapis() {
      return this.vapiService.getVapis();
    }

    @Post()
    async postVapi(@Body() body: any) {
        return this.vapiService.postvapi(body);
    }
}
