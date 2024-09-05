import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_CMC_PRO_API_KEY; 
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

  try {
    const response = await axios.get(url, {
      params: {
        symbol: 'BTC,ETH,ADA,SOL', // criptomoedas desejadas
      },
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });

    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados da API CoinMarketCap:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: 500 });
  }
}