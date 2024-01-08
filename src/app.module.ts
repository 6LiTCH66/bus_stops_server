import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BussModule } from './buss/buss.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, BussModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
