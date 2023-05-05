import {Controller, Get} from "@nestjs/common";
import {MyApiService} from '@my/api';

@Controller()
export class AppController {

  @Get()
  public greet(): string {
    const apiService = new MyApiService();
    return apiService.getMessage();
  }
}
