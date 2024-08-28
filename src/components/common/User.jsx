import { Card, Flex, Image, Space, Typography } from "antd";
import Link from "antd/es/typography/Link";
import { useEffect, useState } from "react";
const { Title } = Typography;

function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getGithubUserInfoByName();
  }, []);

  const getGithubUserInfoByName = async () => {
    const response = await fetch("https://api.github.com/users/GauriMestry");
    const data = await response.json();
    setUserData(data);
  };

  return (
    <Card
      title={userData?.name}
      bordered={false}
      style={{
        width: "100%",
      }}
    >
      <Flex justify="space-between" align="center" className="custom-menu">
        <Space direction="vertical">
          <Title level={4} style={{ color: "#006d75" }}>
            Contact No:&nbsp;&nbsp;+91 94325697112
          </Title>
          <Title level={4} style={{ color: "#006d75" }}>
            LinkedIn:&nbsp;&nbsp;
            <Link
              target="_blank"
              style={{ fontSize: 20, color: "#002329", textDecoration: "none" }}
              underline="none"
              href="https://www.linkedin.com/in/gauri-mestri"
            >
              Gauri Mestri
            </Link>
          </Title>
          <Title level={4} style={{ color: "#006d75" }}>
            Location:&nbsp;&nbsp;{userData?.location}
          </Title>
        </Space>
        <Space>
          <Image
            style={{ borderRadius: 8 }}
            height={300}
            width={300}
            src="https://media.licdn.com/dms/image/D5603AQHIoXuYJC6J_w/profile-displayphoto-shrink_400_400/0/1701690307899?e=1727913600&v=beta&t=cgHH_uEePODuLRkOkU6avfzRjHQPLmdK5M3Q5y_P1R8"
          />
        </Space>
      </Flex>
    </Card>
  );
}

export default User;
