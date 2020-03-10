import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const basePath: string = 'api';
  const appOptions = {cors: true};
  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.setGlobalPrefix(basePath);

  const options = new DocumentBuilder()
    .setTitle('Knitrogene-ws')
    .setDescription('Knitrogene API')
    .setVersion('1.0')
    .setBasePath(basePath)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3200);
}
bootstrap();