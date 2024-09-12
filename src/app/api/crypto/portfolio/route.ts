import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const usuarioId = parseInt(searchParams.get('usuarioId') || '0');

  try {
    const portfolio = await prisma.portfolio.findMany({
      where: { usuarioId },
      include: {
        crypto: true,
        transacoes: true,
      },
    });
    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar portfólio' }, { status: 400 });
  }
}
