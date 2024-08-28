import { CheckCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import { Button, Flex, Image, Space } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../../utils/constant";
import UserContext from "../../utils/context/UserContext";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import "./layout.css";

function Header() {
  const isOnline = useOnlineStatus();
  const { loaggedInUser } = useContext(UserContext);
  const [buttonName, setButtonName] = useState("Login");
  const navItems = [
    { title: "Home", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Contact Us", to: "/contact" },
    { title: "Cart", to: "/cart" },
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
      <Image width={100} src={APP_LOGO} />
      <Flex
        component="div"
        align="right"
        gap="large"
        style={{ marginRight: "50px", justifyItems: "center" }}
        className="custom-menu"
      >
        {navItems?.map((navItem) => (
          <Space
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
