import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

import { HomeModule } from './modules/home/home.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(HomeModule, { cors: true });

  const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  const port = configService.get('DEV_PORT');

  
  if(!process.env.PORT && port === '4000') {
    const config = new DocumentBuilder()
    .setTitle('Vet life API')
    .setDescription('API details')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  }
 
  await app.listen(process.env.PORT || port);
}

bootstrap();
