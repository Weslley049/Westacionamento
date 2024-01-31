import { BullModule, InjectQueue } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MiddlewareBuilder } from '@nestjs/core';
import { Queue } from 'bull';
import { createBullBoard } from 'bull-board';
import { CartaoController } from './controllers/cartao.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaCartaoRepository } from './repositories/prisma/prisma-cartao-repository';
import { CartaoQueueConsumer } from './services/consumers/cartao-queue-consumer';
import { CartaoQueueService } from './services/queues/cartao-queue-service';

import { BullAdapter } from 'bull-board/bullAdapter';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'cartao',
    }),
  ],
  controllers: [CartaoController],
  providers: [
    PrismaCartaoRepository,
    PrismaService,
    CartaoQueueService,
    CartaoQueueConsumer,
  ],
})
export class AppModule {
  constructor(@InjectQueue('cartao') private readonly cartaoQueue: Queue) {}

  configure(consumer: MiddlewareBuilder) {
    const { router } = createBullBoard([new BullAdapter(this.cartaoQueue)]);

    consumer.apply(router).forRoutes('/admin/queues');
  }
}
