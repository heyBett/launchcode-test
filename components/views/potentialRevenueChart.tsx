import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

type Props = {
  data: {
    name: string;
    Quotes: number;
    Sales: number;
  }[];
};

export default function PotentialRevenueChart(props: Props) {
  const COLORS = ["#F0CE84", "#727272", "#32AFA9", "#F57575", "#5F6CB1"];

  return (
    <div className="flex flex-row justify-around">
      <div className="w-40 h-40">
        <ResponsiveContainer width="100%" height="110%">
          <PieChart width={200} height={200}>
            <Pie
              data={props.data}
              cx="50%"
              cy="50%"
              labelLine={false}
              dataKey="Quotes"
            >
              {props.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-40 h-40">
        <ResponsiveContainer width="100%" height="110%">
          <PieChart width={200} height={200}>
            <Pie
              data={props.data}
              cx="50%"
              cy="50%"
              labelLine={false}
              dataKey="Sales"
            >
              {props.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
