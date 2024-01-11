import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  app.enableCors({
    origin: process.env.ORIGIN,
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('Bus Stops')
    .setDescription("")
    .setVersion('1.0')
    .addTag('bus')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, "0.0.0.0");
}
bootstrap();
