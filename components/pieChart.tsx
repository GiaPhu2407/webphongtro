//
//
"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";

const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
});

const data = {
  labels: ["Chưa truy cập", "Đã truy cập"],
  datasets: [
    {
      label: "My First Dataset",
      data: [40, 100],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(0,255,0)"],
      hoverOffset: 4,
    },
  ],
};

const PieChartDemo = () => {
  return (
    <div className="w-[20vw]">
      {/* <h1>Example 2: Bar Chart</h1> */}
      <Pie data={data} />
    </div>
  );
};

export default PieChartDemo;
