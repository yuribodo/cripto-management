    import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cryptoId = parseInt(searchParams.get('cryptoId') || '0');

  try {
    const historico = await prisma.priceHistory.findMany({
      where: { cryptoId },
      orderBy: { data: 'desc' },
    });
    return NextResponse.json(historico);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar histórico de preços' }, { status: 400 });
  }
}
