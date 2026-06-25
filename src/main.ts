import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      /^https:\/\/frontend-pawie.*\.vercel\.app$/,
      'https://pawieapp.com',
      'https://www.pawieapp.com',
    ],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
