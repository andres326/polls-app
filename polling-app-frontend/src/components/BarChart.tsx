
import { Bar } from "react-chartjs-2";
import { ChartData } from "../types";

export const BarChart = ({ chartData }: { chartData: ChartData }) => {
  return (
    <div className="max-w-xl w-full align-middle">
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};