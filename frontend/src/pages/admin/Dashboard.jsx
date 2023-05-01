import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import {TbHotelService} from "react-icons/tb";
  import { Card, Space, Statistic, Table, Typography } from "antd";
  import { useEffect, useState } from "react";
  
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function Dashboard() {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);
     const getDashboard = () => {
        return fetch("http://localhost:8080/admin").then((res) => res.json());
      };

    useEffect(() => {
      getDashboard().then((res) => {
        setOrders(res.bookingAmount);
        setCustomers(res.userAmount);
        setRevenue(res.revenue);
        setInventory(res.roomAmount)
      });
    }, []);
  
    return (
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Панель администратора</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Бронирования"}
            value={orders}
          />
          <DashboardCard
            icon={
              <TbHotelService
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 40,
                  padding: 8,
                }}
              />
            }
            title={"Номера"}
            value={inventory}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Пользователи"}
            value={customers}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Доход"}
            value={revenue}
          />
        </Space>
        <Space>
          <RecentOrders />
          <DashboardChart />
        </Space>
      </Space>
    );
  }
  
  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }
  function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const getOrders = () => {
        return fetch("http://localhost:8080/admin").then((res) => res.json());
      };
    useEffect(() => {
      setLoading(true);
      getOrders().then((res) => {
        setDataSource(res.recentBookings.splice(0, 3));
        setLoading(false);
      });
    }, []);
    console.log(dataSource);
    return (
      <>
        <Typography.Text>Последние бронирования</Typography.Text>
        <Table
          columns={[
            {
              title: "Бронирование",
              dataIndex: "id",
            },
            {
              title: "Дата въезда",
              dataIndex: "checkIn",
            },
            {
              title: "Дата выезда",
              dataIndex: "checkOut",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </>
    );
  }
  
  function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
    const getRevenue = () => {
        return fetch("https://dummyjson.com/carts").then((res) => res.json());
      };
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `Бронь-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "Доход",
              data: data,
              backgroundColor: "rgba(255, 0, 0, 1)",
            },
          ],
        };
  
        setReveneuData(dataSource);
      });
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Доход по бронированию",
        },
      },
    };
  
    return (
      <Card style={{ width: 500, height: 250 }}>
        <Bar options={options} data={reveneuData} />
      </Card>
    );
  }
  export default Dashboard;