import { StarFilled } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Space,
  Typography,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/cartSlice";
import { FOOD_CATALOG_URL } from "../../utils/constant";
const { Title } = Typography;

function RestMenuCard({ info }) {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

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

  const showBanner = () => (
    <Alert
      message="Item added to cart successfully!"
      type="success"
      showIcon
      action={
        <Link
          style={{
            padding: 6,
            color: "#52c41a",
            borderRadius: "4px",
            fontWeight: 600,
            marginRight: 10,
            borderColor: "#52c41a",
            border: "2px solid",
          }}
          to={"/cart"}
        >
          Go to Cart
        </Link>
      }
      closable
    />
  );

  const handleAddItem = () => {
    try {
      setShowAlert(false);
      dispatch(addItem(info));
    } catch (e) {
      console.log(e);
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <>
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
            <Button onClick={handleAddItem} type="primary">
              Add to Cart+
            </Button>
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
      {showAlert && showBanner()}
    </>
  );
}

export default RestMenuCard;
