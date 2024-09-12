import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function POST(req: Request) {
  const { usuarioId, cryptoId, quantidade, valorUnitario } = await req.json();

  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: {
        usuarioId_cryptoId: { usuarioId, cryptoId },
      },
    });

    if (!portfolio) {
      
      await prisma.portfolio.create({
        data: {
          usuarioId,
          cryptoId,
          quantidadeTotal: quantidade,
          precoMedio: valorUnitario,
          transacoes: {
            create: {
              quantidade,
              valorUnitario,
            },
          },
        },
      });
    } else {
      
      const novaQuantidadeTotal = portfolio.quantidadeTotal + quantidade;
      const novoPrecoMedio = ((portfolio.precoMedio * portfolio.quantidadeTotal) + (valorUnitario * quantidade)) / novaQuantidadeTotal;

      await prisma.portfolio.update({
        where: { id: portfolio.id },
        data: {
          quantidadeTotal: novaQuantidadeTotal,
          precoMedio: novoPrecoMedio,
          transacoes: {
            create: {
              quantidade,
              valorUnitario,
            },
          },
        },
      });
    }

    return NextResponse.json({ message: 'Compra realizada com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao realizar compra' }, { status: 400 });
  }
}
