import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { month: "Apr", balance: 8200 },
  { month: "May", balance: 9600 },
  { month: "Jun", balance: 11400 },
  { month: "Jul", balance: 10300 },
  { month: "Aug", balance: 12400 },
];

export function BalanceChartCard() {
  return (
    <Card className="bg-white/90 backdrop-blur shadow-sm border-none">
      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Balance over time
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <ChartContainer
          config={{ balance: { label: "Balance", color: "#2563eb" } }}
          className="h-[220px] w-full"
        >
          <AreaChart data={data} margin={{ left: 8, right: 8 }}>
            <defs>
              <linearGradient id="fillBalance" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis width={40} tickLine={false} axisLine={false} />
            <Area
              dataKey="balance"
              type="monotone"
              stroke="#2563eb"
              fill="url(#fillBalance)"
              strokeWidth={2}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

