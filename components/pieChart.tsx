"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import ExcelJS from "exceljs"; // Đảm bảo đã cài đặt exceljs
import { saveAs } from "file-saver"; // Đảm bảo đã cài đặt file-saver
const Dou = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  {
    ssr: false,
  }
);

const data = {
  labels: ["Đã truy cập", "Chưa truy cập"],
  datasets: [
    {
      data: [63, 33],
      backgroundColor: ["#4CAF50", "#03A9F4"],
      hoverBackgroundColor: ["#45A049", "#0288D1"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hides legend if you want custom labels below the chart
    },
  },
};

const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Access Data");

  // Add Header Row: tạo header cho bảng dữ liệu
  worksheet.columns = [
    { header: "Label", key: "label", width: 15 },
    { header: "Data", key: "data", width: 15 },
  ];

  // Thêm các dòng dữ liệu
  data.labels.forEach((label, index) => {
    worksheet.addRow({
      label: label,
      data: data.datasets[0].data[index],
    });
  });

  // Tạo file Excel từ buffer
  const buffer = await workbook.xlsx.writeBuffer();

  // Tạo và lưu file Excel
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "access_data.xlsx");
};

const PieChartDemo = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center p-4  rounded-lg shadow-lg w-[1000px] stroke-[#A18F8F] ">
        <div className="w-full" style={{ height: "200px" }}>
          <div className="text-center">
            <p className="text-xl font-semibold whitespace-nowrap ">
              Tổng số người đã truy cập trong ngày
            </p>
          </div>
          <Dou data={data} options={options} />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex justify-between w-40 mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>Đã truy cập</span>
            </div>
          </div>
          <div className="flex justify-between w-40">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span>Chưa truy cập</span>
            </div>
          </div>
          <button
            onClick={exportToExcel}
            className="mt-6 px-4 py-2 bg-[#24A521]  text-white rounded-lg hover:bg-green-600"
          >
            Xuất Excel
          </button>
        </div>
      </div>
      <div className="ml-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIlLN5u1W10Uret9Q0-iwtE1F_Qldiq15DA&s"
          alt="Example Image"
          className="max-w-xs"
        />
      </div>
    </div>
  );
};

export default PieChartDemo;
