/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as dotenv from 'dotenv';
import * as process from "process";

async function bootstrap() {
  // Read the configuration.
  dotenv.config();

  const corsEnabled = true;
  console.log(`Cors enabled = ${corsEnabled}`);

  const app = await NestFactory.create(AppModule, { cors: corsEnabled, logger: ['error', 'debug', 'log'] });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
