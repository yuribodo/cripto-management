"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { crypto: "Bitcoin", price: 2500, fill: "var(--color-bitcoin)" },
  { crypto: "Ethereum", price: 1750, fill: "var(--color-ethereum)" },
  { crypto: "Ripple", price: 255, fill: "var(--color-ripple)" },
  { crypto: "Litecoin", price: 485, fill: "var(--color-litecoin)" },
  { crypto: "Cardano", price: 4228, fill: "var(--color-cardano)" },
]

const chartConfig = {
  price: {
    label: "Price",
  },
  bitcoin: {
    label: "Bitcoin",
    color: "hsl(var(--chart-1))",
  },
  ethereum: {
    label: "Ethereum",
    color: "hsl(var(--chart-2))",
  },
  ripple: {
    label: "Ripple",
    color: "hsl(var(--chart-3))",
  },
  litecoin: {
    label: "Litecoin",
    color: "hsl(var(--chart-4))",
  },
  cardano: {
    label: "Cardano",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieChartComponent() {
  const totalPrice = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.price, 0)
  }, [])

  return (
    <Card className="flex flex-col bg-[#1E1E1E] text-white">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white">My Cryptos</CardTitle>
        
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] max-w-[400px]"
        >
          <PieChart width={400} height={400}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="price"
              nameKey="crypto"
              innerRadius={80}
              outerRadius={150}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          ${totalPrice.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-gray-400"
                        >
                          Total Value
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm text-white">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-400" />
        </div>
        <div className="leading-none text-gray-400">
          Showing total value of cryptocurrencies for the last month
        </div>
      </CardFooter>
    </Card>
  )
}
