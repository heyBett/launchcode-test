import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";

type Props = {
  data: {
    name: string;
    Quotes: number;
    Sales: number;
  }[];
};

export default function RevenueChart(props: Props) {
  return (
    <div className="h-40 -translate-x-6">
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={props.data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            dot={{ stroke: "#3CAAA7", strokeWidth: 1 }}
            strokeWidth={3}
            dataKey="Sales"
            stroke="#3CAAA7"
            isAnimationActive={true}
          />
          <Line
            dot={{ stroke: "#5F6CB0", strokeWidth: 1 }}
            strokeWidth={3}
            dataKey="Quotes"
            stroke="#5F6CB0"
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
