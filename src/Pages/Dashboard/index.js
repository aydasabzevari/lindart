import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getUserUrl = "http://localhost:8000/api/me/";

const { Header, Content, Sider } = Layout;
const Dashboard = () => {
  const [user, setUser] = useState({});
  const naviagte = useNavigate();

  useEffect(() => {
    let token = "";
    if (localStorage.getItem("access-token")) {
      token = localStorage.getItem("access-token");
    } else {
      naviagte("/login");
    }

    axios
      .get(getUserUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navItems = [
    {
      key: "profile",
      icon: React.createElement(UserOutlined),
      label: "Profile",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={navItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div className="wrapper-dashboard">
            <h2>Personal Detail</h2>

            <div className="row">
              <p>Username:</p>
              <p>{user.username}</p>
            </div>

            <div className="row">
              <p>Name:</p>
              <p>{user.name}</p>
            </div>

            <div className="row">
              <p>Email:</p>
              <p>{user.email}</p>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
