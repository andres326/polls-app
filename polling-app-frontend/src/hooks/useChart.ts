import { useEffect, useState } from "react";
import { ChartData, DetailedPoll } from "../types";

export const useChart = ({ poll }: { poll: DetailedPoll | null }) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: poll?.options.map((option) => option.name) || [],
    datasets: [
      {
        label: "Votes",
        data: poll?.options.map((option) => option.votes) || [],
        backgroundColor: ["#3b82f6"],
        borderColor: ["#3b82f6"],
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    const labels = poll?.options.map((option) => option.name) || []
    const data = poll?.options.map((option) => option.votes) || []
    setChartData({
      labels,
      datasets: [
        {
          label: "Votes",
          data,
          backgroundColor: ["rgb(253 164 175)"],
          borderColor: ["rgb(251 113 133)"],
          borderWidth: 1
        }
      ]
    })
  }, [poll])

  return { chartData }
}