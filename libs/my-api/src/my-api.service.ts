import {Injectable} from '@nestjs/common';
import {MessageService} from '@my/proto';
import {MyCoreModel} from '@my/core';
import {MyStrapiModel} from '@my/strapi';

@Injectable()
export class MyApiService {
  public getMessage(): string {

    const messageService = new MessageService();
    const messageCode = messageService.getMessage();

    const myCoreModel = new MyCoreModel();
    const messageMyCoreModel = myCoreModel.getMessage();

    const myStrapiModel = new MyStrapiModel();
    const messageStrapiCoreModel = myStrapiModel.getModel();

    return [messageCode, messageMyCoreModel, messageStrapiCoreModel].join(' ');
  }
}
