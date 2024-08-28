import { Flex, Space } from "antd";
import Title from "antd/es/typography/Title";

export default function OfferCard({ header, offerTag, description }) {
  return (
    <Space direction="vertical" title={header}>
      <Flex style={{ height: 80 }} gap="small" justify="space-between">
        <Title level={4} style={{ color: "#000900" }}>
          {header}
        </Title>
        <Title level={4} style={{ color: "#006d75" }}>
          {offerTag}
        </Title>
      </Flex>
      <Title level={5} style={{ color: "#006d75" }}>
        {description}
      </Title>
    </Space>
  );
}
