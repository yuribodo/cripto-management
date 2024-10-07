import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function POST(req: Request) {
  const { nome, email, senha } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        nome,
        email,
        senha, // Lembre-se de criptografar a senha antes de salvar
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 400 });
  }
}
