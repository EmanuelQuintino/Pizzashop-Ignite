import { TooltipProps } from "recharts";

export const CustomTooltip = ({ payload, label }: TooltipProps<[], string>) => {
  if (payload && payload.length) {
    return (
      <div className="rounded border border-gray-200 bg-white p-2 shadow-md">
        <p className="mb-1 text-sm font-medium text-gray-600">Dia: {label}</p>

        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-violet-700">
            {`${entry.name} : ${entry.value?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
