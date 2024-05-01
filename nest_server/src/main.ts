import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
        origin: true, // Allow requests from all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow specified HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allow specified headers
    });
  await app.listen(3000);
}
bootstrap();
