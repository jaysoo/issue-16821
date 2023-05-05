import {MessageService} from '@my/proto';

export class MyStrapiModel {

  public getModel(): string {
    const protoMessage = new MessageService();

    return protoMessage.getMessage();
  }

}
