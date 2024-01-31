import { Injectable } from '@nestjs/common';
import { Cartao, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CartaoRepository } from '../cartao-repository';

@Injectable()
export class PrismaCartaoRepository implements CartaoRepository {
  constructor(private prisma: PrismaService) {}

  async getCartao(uuid: string): Promise<Cartao> {
    return this.prisma.cartao.findFirst({
      where: {
        uuid,
      },
    });
  }

  async createCartao(data: Prisma.CartaoCreateInput): Promise<Cartao> {
    return this.prisma.cartao.create({
      data,
    });
  }

  async finishCartao(data: Prisma.CartaoUpdateInput): Promise<Cartao> {
    return this.prisma.cartao.update({
      data,
      where: {
        uuid: String(data.uuid),
      },
    });
  }

  deleteCartao(uuid: string): string {
    return 'cartão deletado';
  }
}
