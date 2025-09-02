import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: 'Hello API...' });
  }
  getDataAlso(): { message: string } {
    return ({ message: 'Hello API...' });
  }
}
