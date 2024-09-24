import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

// Pie chart configuration
const pieChartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22, 50],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ['Books Sold', 'New Arrivals', 'Top Rated', 'E-books', 'Special Offers', 'Marketing'],
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60", '#db12d2'],
    legend: {
      show: false,
    },
    title: {
      text: "Sales Distribution",
      align: "center",
    },
  },
};

// Bar chart configuration
const barChartConfig = {
  type: "bar",
  height: 300,
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    title: {
      text: "Monthly Sales Data",
      align: "center",
    },
  },
  series: [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Welcome heading */}
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Welcome to Your Dashboard
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pie Chart Card */}
          <Card>
            <CardHeader className="text-center">
              <Typography variant="h6" color="blue-gray">
                Sales Distribution
              </Typography>
            </CardHeader>
            <CardBody>
              <Chart {...pieChartConfig} />
              <Typography className="text-center mt-4">
                This pie chart shows the distribution of sales across different categories.
              </Typography>
            </CardBody>
          </Card>

          {/* Bar Chart Card */}
          <Card>
            <CardHeader className="text-center">
              <Typography variant="h6" color="blue-gray">
                Monthly Sales
              </Typography>
            </CardHeader>
            <CardBody>
              <Chart {...barChartConfig} />
              <Typography className="text-center mt-4">
                The bar chart provides insights into sales performance over the last six months.
              </Typography>
            </CardBody>
          </Card>

          {/* Info Card */}
          <Card>
            <CardHeader className="text-center">
              <Typography variant="h6" color="blue-gray">
                Key Insights
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography className="mb-4">
                - 55% of the books sold are in the "New Arrivals" category.
              </Typography>
              <Typography className="mb-4">
                - June was the highest-performing month with a 10% increase.
              </Typography>
              <Typography>
                - E-books sales have increased by 25% in the last month.
              </Typography>
              <Typography>
                - Top-rated books account for 13% of total sales.
              </Typography>
              <Typography>
                - Special offers have driven a 30% boost in sales.
              </Typography>
              <Typography>
               - Physical books still lead with 44% of overall sales.
              </Typography>
              <Typography>
                - Marketing efforts contributed to a 50% increase in overall sales.
              </Typography>
            </CardBody>
          </Card>
        </div>

        {/* More descriptive text below */}
        <div className="mt-10">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Dashboard Overview
          </Typography>
          <Typography color="gray">
            This dashboard provides a comprehensive view of sales data and key insights to help you track performance. Use the charts and visualizations to monitor your KPIs and make data-driven decisions.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


