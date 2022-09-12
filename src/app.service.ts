import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  nameFun(name: string) {
    return { hello: 'world' };
  }
}
