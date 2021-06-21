import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require('fs');

const PORT = 3000;

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  await app.listen(PORT);
  console.log(`${PORT}번 포트에서 서버가 시작되었습니다.`);
}
bootstrap();
