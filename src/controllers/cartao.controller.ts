import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CartaoQueueService } from 'src/services/queues/cartao-queue-service';
import { PrismaCartaoRepository } from './../repositories/prisma/prisma-cartao-repository';

import { ApiParam, ApiTags } from '@nestjs/swagger';
import AxiosInstance from 'src/services/axios/axios_instance';
import { v4 as uuidv4 } from 'uuid';

@Controller('cartao')
export class CartaoController {
  constructor(
    private readonly PrismaCartaoRepository: PrismaCartaoRepository,
    private CartaoQueue: CartaoQueueService,
  ) {}

  @Get()
  @ApiTags('Cartão')
  async getCard() {
    const axiosInstance = await new AxiosInstance().createInstance();

    const resposta = await axiosInstance
      .get('last/USD-BRL')
      .then(({ data }) => data);

    return resposta;
  }

  @Post()
  @ApiTags('Cartão')
  async generateCard() {
    const uuid = uuidv4();

    await this.PrismaCartaoRepository.createCartao({ uuid });

    return this.CartaoQueue.add(uuid);
  }

  @Patch('finalizar')
  @ApiTags('Cartão')
  @ApiParam({
    name: 'uuid',
    description: 'uuid referente ao cartão criado',
    type: String,
  })
  async finalizarCard(@Body() body: Prisma.CartaoUpdateInput) {
    const axiosInstance = await new AxiosInstance().createInstance();

    const { USDBRL } = await axiosInstance
      .get('last/USD-BRL')
      .then(({ data }) => data);

    const { high } = USDBRL;

    const queueRemovida = await this.CartaoQueue.removeByUuid(
      String(body.uuid),
    );

    const { id, ...rest } = await this.PrismaCartaoRepository.getCartao(
      String(body.uuid),
    );

    const dataInicial = new Date(rest.dataInicial);

    const dataFinal = new Date(queueRemovida.time);

    const tempoTotal =
      Math.abs(dataFinal.getTime() - dataInicial.getTime()) / 60000;

    return this.PrismaCartaoRepository.finishCartao({
      ...rest,
      finalizado: true,
      dataFinal,
      tempoTotal,
      valorFinal: tempoTotal <= 2 ? 0 : (tempoTotal - 2) * Number(high),
    });
  }
}
