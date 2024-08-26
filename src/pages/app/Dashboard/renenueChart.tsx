import colors from "tailwindcss/colors";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import { CustomTooltip } from "./customTooltip";

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 900 },
  { date: "13/12", revenue: 400 },
  { date: "14/12", revenue: 2300 },
  { date: "15/12", revenue: 800 },
  { date: "16/12", revenue: 640 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>

          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width={"100%"} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={true}
              tickLine={true}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <XAxis dataKey={"date"} axisLine={true} tickLine={true} dy={4} />

            <CartesianGrid
              className="stroke-muted"
              vertical={false}
              horizontal={true}
            />

            <Line
              type={"linear"}
              strokeWidth={2}
              dataKey={"revenue"}
              stroke={colors.violet["500"]}
            />

            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
