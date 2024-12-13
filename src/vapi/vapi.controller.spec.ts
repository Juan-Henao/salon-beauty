import { Test, TestingModule } from '@nestjs/testing';
import { VapiController } from './vapi.controller';

describe('VapiController', () => {
  let controller: VapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VapiController],
    }).compile();

    controller = module.get<VapiController>(VapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
