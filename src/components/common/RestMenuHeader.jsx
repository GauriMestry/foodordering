import { StarFilled } from "@ant-design/icons";
import { Card, Divider } from "antd";
import Title from "antd/es/typography/Title";

export default function RestMenuHeader({
  name,
  avgRating,
  totalRatingsString,
  cuisines,
  areaName,
  sla,
  feeDetails,
}) {
  return (
    <Card hoverable title={name} bordered={false} style={{ width: "90%" }}>
      <Title level={5} style={{ color: "#002329" }}>
        <StarFilled style={{ color: "#006d75" }} />
        &nbsp;&nbsp;
        {`${avgRating} (${totalRatingsString})`}
      </Title>
      <Title level={5} style={{ color: "#006d75" }}>
        {cuisines?.join(", ")}
      </Title>
      <Title level={5} style={{ color: "#006d75" }}>
        {areaName}
      </Title>
      <Divider style={{ width: "100%" }} />
      <Title level={5} style={{ color: "#000900" }}>
        {`${sla?.lastMileTravel} Kms |  Rs.${
          feeDetails?.totalFee / 100
        } Delivery fee will apply`}
      </Title>
    </Card>
  );
}
