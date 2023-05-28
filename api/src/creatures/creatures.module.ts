import { Module } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreaturesController } from './creatures.controller';

@Module({
  providers: [CreaturesService],
  controllers: [CreaturesController]
})
export class CreaturesModule {}
