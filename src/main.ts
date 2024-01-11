import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  app.enableCors({
    origin: process.env.ORIGIN,
    credentials: true
  })
  await app.listen(port, "0.0.0.0");
}
bootstrap();
