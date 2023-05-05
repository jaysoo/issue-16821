import {
  CACHE_MANAGER,
  CacheModule,
  Inject,
  Logger,
  MiddlewareConsumer,
  Module,
  OnModuleInit,
  RequestMethod,
} from "@nestjs/common";
import * as redisStore from "cache-manager-redis-store";
import { AppController } from "./app.controller";
import { Cache } from "cache-manager";
import { WINSTON_MODULE_PROVIDER, WinstonModule } from "nest-winston";
import * as winston from "winston";
import "winston-daily-rotate-file";
@Module({
  imports: [
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
      ],
    })
  ],
  controllers: [AppController],
})
export class AppModule {
  //#region Constructor

  public constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(WINSTON_MODULE_PROVIDER)
    protected readonly _logger: Logger,
    @Inject(CACHE_MANAGER) protected readonly _cacheManager: Cache
  ) {}

  //#endregion

  //#region Life cycle hooks


  //#endregion

  //#region Methods

  //#endregion
}
