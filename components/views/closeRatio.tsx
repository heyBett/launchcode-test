import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

type Props = {
  data: {
    name: string;
    Quotes: number;
    Sales: number;
  }[];
};

export default function CloseRatio(props: Props) {
  const COLORS = ["#F0CE84", "#727272", "#32AFA9", "#F57575", "#5F6CB1"];

  return (
    <div className="">
      <div className="flex items-center justify-center h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={90} height={80}>
            <Pie
              data={props.data}
              innerRadius={30}
              outerRadius={60}
              paddingAngle={2}
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
