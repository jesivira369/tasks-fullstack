import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/');
  const port = process.env.PORT || 4000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
