import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { usuarioId, cryptoId, quantidade } = await req.json();

  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: {
        usuarioId_cryptoId: { usuarioId, cryptoId },
      },
    });

    if (!portfolio || portfolio.quantidadeTotal < quantidade) {
      return NextResponse.json({ error: 'Quantidade insuficiente para venda' }, { status: 400 });
    }

    const novaQuantidadeTotal = portfolio.quantidadeTotal - quantidade;

    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        quantidadeTotal: novaQuantidadeTotal,
        transacoes: {
          create: {
            quantidade: -quantidade,
            valorUnitario: portfolio.precoMedio,
          },
        },
      },
    });

    return NextResponse.json({ message: 'Venda realizada com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao realizar venda' }, { status: 400 });
  }
}
