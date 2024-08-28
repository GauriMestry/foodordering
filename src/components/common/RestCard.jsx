import { HeartFilled } from "@ant-design/icons";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { REST_IMG_LINK } from "../../utils/constant";
import "../layout/layout.css";
import BasicModal from "./BasicModal";

function RestCard({ restData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = restData?.info ?? {};

  const modalData = {
    rating: avgRating?.toString() + "%",
    totalRatingsString,
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Card
      hoverable
      style={{
        width: 300,
        padding: "8px",
        backgroundColor: "#e6fffb",
        alignSelf: "center",
      }}
      cover={
        <Image
          alt="example"
          src={`${REST_IMG_LINK}${cloudinaryImageId}`}
          height={250}
        />
      }
      actions={[
        <HeartFilled
          key="setting"
          style={{ color: "#e6fffb" }}
          title="Ratings"
          onClick={() => showModal()}
        />,
      ]}
    >
      <Meta
        title={name}
        description={cuisines?.join(", ")}
        style={{ height: 60 }}
      />
      <Meta
        description={`Delivery Time: ${deliveryTime} Minutes`}
        style={{ height: 25, marginTop: 2 }}
      />
      <BasicModal
        data={modalData}
        title="Ratings"
        okType="primary"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Card>
  );
}

export default RestCard;
