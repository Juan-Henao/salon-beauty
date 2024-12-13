import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VapiService } from './vapi/vapi.service';
import { VapiController } from './vapi/vapi.controller';

@Module({
  imports: [],
  controllers: [AppController, VapiController],
  providers: [AppService, VapiService],
})
export class AppModule {}
