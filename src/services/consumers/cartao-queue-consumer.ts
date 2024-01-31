import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { CartaoQueueService } from '../queues/cartao-queue-service';

@Processor('cartao')
export class CartaoQueueConsumer {
  constructor(private CartaoQueue: CartaoQueueService) {}

  @Process('card-job')
  async transcode(job: Job<any>) {
    try {
      // Adiciona um novo trabalho com o count atualizado

      if (!job.data.cancelled) {
        await this.CartaoQueue.recreat(job.data.uuid, new Date());
      }
    } catch (err) {
      console.error('Erro ao recriar o job:', err);
    }
  }
}
