import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class CartaoQueueService {
  constructor(@InjectQueue('cartao') private readonly cartaoQueue: Queue) {}

  async add(uuid: string) {
    await this.cartaoQueue.add(
      'card-job',
      {
        uuid,
        time: new Date(),
      },
      { delay: 10000 },
    );
  }

  async recreat(uuid: string, newDate: Date) {
    await this.cartaoQueue.add(
      'card-job',
      {
        uuid,
        time: newDate,
      },
      { delay: 10000 },
    );
  }

  // async remove(jobId: string | number) {
  //   const job = await this.cartaoQueue.getJob(jobId);

  //   const { data } = job;

  //   await job.remove();

  //   return data;
  // }

  async removeByUuid(uuid: string) {
    const data = await this.cartaoQueue.getJobs([
      'waiting',
      'active',
      'delayed',
    ]);

    const jobs = [...data];

    const job = jobs.filter((elem) => elem.data.uuid === uuid)[0];

    const { data: jobData } = job;

    await job.update({
      ...job.data,
      cancelled: true,
    });

    return jobData;
  }
}
