import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
        session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
       cookie:{
        maxAge: 300000
        }
       }),
       );
    app.enableCors({
      origin: true, // Allow requests from all origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow specified HTTP methods
      credentials: true // Allow credentials (cookies, authorization headers) to be sent cross-origin
    });
  
    // Start the Nest.js application and listen for incoming HTTP requests on port 3000
    await app.listen(3002);
  }

bootstrap();
