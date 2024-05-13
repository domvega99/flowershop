import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors({
        origin: true, // Allow requests from all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow specified HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allow specified headers
    });
  await app.listen(3000);
}
bootstrap();
