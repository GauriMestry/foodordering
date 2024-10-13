import { CheckCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import { Button, Flex, Image, Space } from "antd";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../../utils/constant";
import UserContext from "../../utils/context/UserContext";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import "./layout.css";

function Header() {
  const isOnline = useOnlineStatus();
  const { loaggedInUser } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  const [buttonName, setButtonName] = useState("Login");
  const navItems = [
    { id: "home", title: "Home", to: "/" },
    { id: "about", title: "About Us", to: "/about" },
    { id: "cart", title: `Cart (${cartItems?.length})`, to: "/cart" },
  ];
  const login = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };
  return (
    <Flex
      component="div"
      justify="space-between"
      align="center"
      style={{
        backgroundColor: "#002329",
        padding: "5px",
        fontSize: "14px",
        justifyItems: "center",
      }}
      className="custom-menu"
    >
      <Image width={100} src={APP_LOGO} title="app-logo" />
      <Flex
        component="div"
        align="right"
        gap="large"
        style={{ marginRight: "50px", justifyItems: "center" }}
        className="custom-menu"
      >
        {navItems?.map((navItem) => (
          <Space
            title="menu-item"
            key={navItem?.title}
            style={{
              fontWeight: 600,
              color: "#d9d9d9",
              borderRadius: "8px",
              padding: "10px",
              justifyContent: "center",
            }}
          >
            <Link
              data-testid={navItem?.id}
              to={navItem?.to}
              style={{
                fontSize: "16px",
                textDecoration: "none",
                color: "#d9d9d9",
                marginLeft: "50px",
              }}
            >
              {navItem?.title}
            </Link>
          </Space>
        ))}
        <Flex vertical justify="center" align="center" className="authspace">
          <Button onClick={login} type="default">
            {buttonName}
          </Button>
        </Flex>
        <Flex vertical justify="center" align="center" className="authspace">
          {isOnline ? (
            <CheckCircleFilled style={{ color: "#52c41a" }} />
          ) : (
            <MinusCircleFilled style={{ color: "#cf1322" }} />
          )}
        </Flex>
        {buttonName === "Logout" && (
          <Flex vertical justify="center" align="center" className="authspace">
            <Space
              style={{
                fontWeight: 600,
                color: "#d9d9d9",
                borderRadius: "8px",
                padding: "10px",
                justifyContent: "center",
              }}
            >
              {loaggedInUser}
            </Space>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
