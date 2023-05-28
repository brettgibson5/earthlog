import { Controller, Get } from '@nestjs/common';
import { CreaturesService } from './creatures.service';

@Controller('creatures')
export class CreaturesController {
  constructor(private creaturesService: CreaturesService) {}

  @Get()
  public viewAll(): any {
    return this.creaturesService.creatures;
  }
}
