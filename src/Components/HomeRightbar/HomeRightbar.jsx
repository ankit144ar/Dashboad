import "./homeRightBar.css";
import Navbar from "../Navbar/Navbar";
import {
  BarChart,
  Bar,
  ComposedChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell
} from "recharts";

function HomeRightbar() {
  const data = [
    {
      name: "Page A",
      uv: 1200,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 600,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 1000,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 1780,
      fill: "#bab4b4",
    },
    {
      name: "Page E",
      uv: 4890,
      fill: "#17964a",
    },
    {
      name: "Page F",
      uv: 1390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 3490,
      fill: "#bab4b4",
    },
  ];
  const data2 = [
    {
      name: "Page A",
      uv: 1100,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 5672,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 1500,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 3624,
      fill: "#493C8B",
    },
    {
      name: "Page E",
      uv: 4890,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 1390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 390,
      fill: "#bab4b4",
    },
  ];
  const data3 = [
    {
      name: "Page A",
      uv: 1200,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 1600,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 2198,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 2780,
      fill: "#bab4b4",
    },
    {
      name: "Page E",
      uv: 4890,
      fill: "#FFA500",
    },
    {
      name: "Page F",
      uv: 2390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 1490,
      fill: "#bab4b4",
    },
  ];
  const data4 = [
    {
      name: "Page A",
      Task_Created: 4000,
      Task_Completed: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Task_Created: 3000,
      Task_Completed: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Task_Created: 2000,
      Task_Completed: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Task_Created: 2780,
      Task_Completed: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Task_Created: 1890,
      Task_Completed: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Task_Created: 2390,
      Task_Completed: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Task_Created: 3490,
      Task_Completed: 4300,
      amt: 2100,
    },
  ];
  const data5 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const data6 = [
    {
      name: "Jan",
      uv: 590,
      amt: 1400,
      fill: "#bab4b4",
    },
    {
      name: "Feb",
      uv: 868,
      amt: 1506,
      fill: "#bab4b4",
    },
    {
      name: "Mar",
      uv: 1397,
      amt: 989,
      fill: "#bab4b4",
    },
    {
      name: "Apr",
      uv: 1480,
      amt: 1228,
      fill: "#bab4b4",
    },
    {
      name: "May",
      uv: 1520,
      amt: 1100,
      fill: "#bab4b4",
    },
    {
      name: "Jun",
      uv: 1400,
      amt: 1700,
      fill: "#35317E",
    },
    {
      name: "Jul",
      uv: 390,
      amt: 1900,
      fill: "#bab4b4",
    },
    {
      name: "Aug",
      uv: 668,
      amt: 2506,
      fill: "#bab4b4",
    },
    {
      name: "Sep",
      uv: 397,
      amt: 1989,
      fill: "#bab4b4",
    },
    {
      name: "Oct",
      uv: 1480,
      amt: 228,
      fill: "#bab4b4",
    },
    {
      name: "Nov",
      uv: 520,
      amt: 1100,
      fill: "#bab4b4",
    },
    {
      name: "Dec",
      uv: 2400,
      amt: 1700,
      fill: "#bab4b4",
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  return (
    <div className="homeRightbar">
      <Navbar />
      <div>
        <div className="itemContainers">
          <div className="itemContainer itemContainer_1">
            <div className="subItemContainer">
              <p className="taskProgress">Task Progress</p>
              <p className="taskCounter">212</p>
              <p className="currentMonth">Current Month</p>
            </div>
            <div className="barChartContainer">
              <BarChart width={160} height={100} data={data}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className="itemContainer itemContainer_2">
            <div className="subItemContainer">
              <p className="taskProgress">Task Completed</p>
              <p className="taskCounter">301</p>
              <p className="currentMonth">Current Month</p>
            </div>
            <div className="barChartContainer">
              <BarChart width={160} height={100} data={data2}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className="itemContainer itemContainer_3">
            <div className="subItemContainer">
              <p className="taskProgress">Monthly Task Summary</p>
              <p className="taskCounter">1294</p>
              <p className="currentMonth">Current Month</p>
            </div>
            <div className="barChartContainer">
              <BarChart width={160} height={100} data={data3}>
                <Tooltip />
                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="middleTaskChart">
          <p className="createdVsCompleted">Task Created vs Task Completed </p>
          <ResponsiveContainer width="95%" height={200}>
            <LineChart
              width={730}
              height={250}
              data={data4}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Task_Created" stroke="#8884d8" />
              <Line type="monotone" dataKey="Task_Completed" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="taskContainer">
          <div className="taskChart">
            <p className="taskContainerText">Your Team Performance This WeeK</p>
            <PieChart width={300} height={100}>
      <Pie
        data={data5}
        cx={155}
        cy={100}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <p className="teamPerformanceText">Your Team Performance is 5% better than last week</p>
    <button type="button" className="viewDetails">View Details</button>
          </div>
          <div className="monthlyEarning">
            <p className="taskContainerText">Monthly Earning Performance</p>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart
                width={500}
                height={400}
                data={data6}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="fill" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRightbar;
