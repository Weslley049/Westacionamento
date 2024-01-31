import { Cartao, Prisma } from '@prisma/client';

export abstract class CartaoRepository {
  abstract getCartao(uuid: string): Promise<Cartao>;
  abstract createCartao(data: Prisma.CartaoCreateInput): Promise<Cartao>;
  abstract finishCartao(data: Prisma.CartaoUpdateInput): Promise<Cartao>;
  abstract deleteCartao(uuid: string): string;
}
