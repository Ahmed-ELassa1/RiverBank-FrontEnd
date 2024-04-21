import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Menu } from "antd";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logoImg.png";
import LogoTxt from "../../assets/logoTxt.png";
import Bars from "../../assets/menu.png";

const Navbar = () => {
  const [current, setCurrent] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      key: "",
    },
    {
      label: "Cities",
      key: "cities",
    },
    {
      label: "Developers",
      key: "developers",
    },
    {
      label: "Projects",
      key: "projects",
    },
    {
      label: "Properties",
      key: "properties",
    },
    {
      label: "Blogs",
      key: "blogs",
    },
    // {
    //   label: "Real Estate Tools / Calculators",
    //   key: "tools",
    //   children: [
    //     {
    //       type: "group",
    //       label: "tools",
    //       children: [
    //         {
    //           label: "Tool 1",
    //           key: "tool1",
    //         },
    //         {
    //           label: "Tool 2",
    //           key: "tool2",
    //         },
    //         {
    //           label: "Instalment Calculator",
    //           key: "calc",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      label: "Contact Us",
      key: "contactUs",
    },
  ];

  const onClick = (e) => {
    setIsOpen(false);
    setCurrent(e.key);
    navigate(e.key);
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  return (
    <>
      <div className={`navbar ${scroll ? "sticky" : ""}`}>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="riverBank" />
            <img className="logoTxt" src={LogoTxt} alt="riverBank" />
          </div>
        </Link>

        <ConfigProvider
          theme={{
            token: {
              darkItemSelectedBg: "#B07A12",
              horizontalItemHoverColor: "#B07A12",
              horizontalItemSelectedColor: "#B07A12",
              itemSelectedColor: "#B07A12",
              colorPrimary: "#B07A12",
              colorSplit: "#B07A12",
              itemSelectedBg: "#B07A12",
              subMenuItemBg: "#B07A12",
              itemHoverBg: "#B07A12",
              itemActiveBg: "#B07A12",
            },
          }}
        >
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="navbar-menu-container"
            items={items}
            defaultSelectedKeys={["1", "calc", "projects"]}
            defaultOpenKeys={["sub1"]}
          />
        </ConfigProvider>

        <div>
          <button className="subscribe-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

      {/* Tablet */}
      <div className="menu-bars">
        <img
          src={Logo}
          width={30}
          alt="logo"
          className="bars"
          onClick={() => {
            setIsOpen(false);
            navigate("/");
          }}
        />

        <img
          src={Bars}
          alt="logo"
          className="bars"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`navMob ${isOpen ? "active" : ""}`}>
        <Menu
          onClick={onClick}
          className="mob-menu"
          style={{
            width: "100%",
          }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </div>
    </>
  );
};

export default Navbar;
