import { Module } from '@nestjs/common';
import { BussController } from './buss.controller';
import { BussService } from './buss.service';

@Module({
  controllers: [BussController],
  providers: [BussService]
})
export class BussModule {}
