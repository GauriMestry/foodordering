import { Card, Carousel, Flex, Space } from "antd";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../../utils/customHooks/useRestaurantDetails";
import { RestCardInfoShimmer } from "../../common/CardShimmer";
import OfferCard from "../../common/OfferCard";
import RestMenuCard from "../../common/RestMenuCard";
import RestMenuHeader from "../../common/RestMenuHeader";

export default function RestMenu() {
  const { restId } = useParams();
  const { restMainInfo, isFetching, categories, offers } =
    useRestaurantDetails(restId);

  const {
    name = "",
    avgRating = 0,
    totalRatingsString = "",
    cuisines = [],
    areaName = "",
    sla = {},
    feeDetails = {},
  } = restMainInfo || {};

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "600px",
        margin: 15,
      }}
    >
      <Flex justify="center" align="center" vertical>
        {isFetching ? (
          <RestCardInfoShimmer />
        ) : (
          <RestMenuHeader
            name={name}
            avgRating={avgRating}
            totalRatingsString={totalRatingsString}
            cuisines={cuisines}
            areaName={areaName}
            sla={sla}
            feeDetails={feeDetails}
          />
        )}
        <br />
        {isFetching ? (
          <RestCardInfoShimmer />
        ) : (
          <Space
            direction="vertical"
            style={{ width: "90%", marginTop: "15px" }}
          >
            <Card hoverable title="Deals for you" style={{ width: "100%" }}>
              <Carousel autoplay>
                {offers?.map((offer) => {
                  const { header, description, offerTag } = offer?.info ?? {};
                  return (
                    <OfferCard
                      key={header}
                      header={header}
                      description={description}
                      offerTag={offerTag}
                    />
                  );
                })}
              </Carousel>
            </Card>
          </Space>
        )}
        {isFetching ? (
          <RestCardInfoShimmer />
        ) : (
          <Space
            direction="vertical"
            style={{ width: "90%", marginTop: "15px" }}
          >
            {categories[0]?.itemCards?.length > 0 ? (
              categories?.map((category, index) => {
                const { title, itemCards } = category ?? {};
                return (
                  <Card key={title + index} title={title}>
                    {itemCards?.map((item, i) => {
                      return (
                        <RestMenuCard
                          key={i + item?.card?.info?.name}
                          info={item?.card?.info}
                        />
                      );
                    })}
                  </Card>
                );
              })
            ) : categories[0]?.card && categories?.length > 0 ? (
              <Card key={categories?.title} title={categories?.title}>
                {categories?.map((item, i) => {
                  return (
                    <RestMenuCard
                      key={i + item?.card?.info?.name}
                      info={item?.card?.info}
                    />
                  );
                })}
              </Card>
            ) : categories ? (
              categories?.map((category, index) => {
                const { title, dish } = category ?? {};
                return (
                  <Card key={title + index} title={title}>
                    <RestMenuCard
                      key={index + dish?.info?.name}
                      info={dish?.info}
                    />
                  </Card>
                );
              })
            ) : (
              <></>
            )}
          </Space>
        )}
      </Flex>
    </Space>
  );
}
