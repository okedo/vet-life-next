import { Test, TestingModule } from '@nestjs/testing';
import { VetReactController } from './vet-react.controller';

describe('VetReactController', () => {
  let controller: VetReactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetReactController],
    }).compile();

    controller = module.get<VetReactController>(VetReactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
