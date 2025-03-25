import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '💋 Welcome to the GlamGiant API! Where beauty meets technology. 💄✨';
  }
}
