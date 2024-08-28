import { StarFilled } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Image, Space, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { FOOD_CATALOG_URL } from "../../utils/constant";
const { Title } = Typography;

function RestMenuCard({ info }) {
  const {
    name,
    description,
    itemPriceStrikeOff,
    price,
    finalPrice,
    imageId,
    ratings,
    defaultPrice,
  } = info ?? {};
  return (
    <Card hoverable key={name} style={{ padding: 3, margin: 8 }}>
      <Flex style={{ height: 200 }} justify="space-between">
        <Space direction="vertical">
          <Title level={4} style={{ color: "#000900" }}>
            {name}
          </Title>
          <Meta description={description} style={{ fontSize: 14 }} />
          {itemPriceStrikeOff ? (
            <Flex
              style={{ height: 80, width: 150 }}
              justify="space-around"
              align="center"
            >
              <Title
                delete={itemPriceStrikeOff}
                level={4}
                style={{
                  color: "#d9d9d9",
                }}
              >
                Rs.{price / 100}
              </Title>
              <Title
                level={4}
                style={{
                  color: "#000000",
                }}
              >
                Rs.{finalPrice / 100}
              </Title>
            </Flex>
          ) : (
            <Title
              level={4}
              style={{
                color: "#000000",
              }}
            >
              Rs.{defaultPrice ?? price / 100}
            </Title>
          )}
        </Space>
        <Flex
          style={{ padding: 3 }}
          gap="small"
          vertical
          justify="space-between"
        >
          <Image
            height="80%"
            width={150}
            style={{ borderRadius: 8 }}
            src={`${FOOD_CATALOG_URL}${imageId}`}
          />
          <Button type="primary">Add to Cart+</Button>
        </Flex>
      </Flex>
      {ratings && Object.values(ratings?.aggregatedRating)?.length > 0 ? (
        <>
          <Divider />
          <Title level={5} style={{ color: "#002329" }}>
            <StarFilled style={{ color: "#006d75" }} />
            &nbsp;&nbsp;
            {`${ratings?.aggregatedRating?.rating} (${ratings?.aggregatedRating?.ratingCount})`}
          </Title>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}

export default RestMenuCard;
