import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Result, Space } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../../utils/apis/getApis";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import { HomeCardsLoader } from "../common/CardShimmer";
import { promotedCard } from "../common/PromotedCard";
import RestCard from "../common/RestCard";
import SearchBar from "../common/SearchBar";
import "../layout/layout.css";

function Content() {
  const isOnline = useOnlineStatus();
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState();
  const RestCardPromoted = promotedCard(RestCard);

  const { data: restData, isFetching } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => getRestaurants(),
  });

  const getTopRatedRest = () => {
    const rest = restList?.filter((rest) => rest.info.avgRating > 4);
    setFilteredRestList(rest);
  };

  useEffect(() => {
    setRestList(
      restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestList(
      restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, [restData]);

  const onSearch = (value) =>
    setFilteredRestList(
      restList?.filter((rest) =>
        rest?.info?.name?.toLowerCase()?.includes(value.toLowerCase())
      )
    );

  if (!isOnline) {
    return (
      <Result
        status="500"
        title="Oops!!"
        subTitle="Sorry, something went wrong!!Looks like you are offline!"
      />
    );
  }

  return (
    <Space direction="vertical" style={{ padding: "16px" }}>
      <Flex justify="space-between">
        <Button
          size="large"
          type="primary"
          title="Top Rated Restaurants"
          style={{ margin: "4px" }}
          onClick={getTopRatedRest}
        >
          Top Rated
        </Button>
        <SearchBar onSearch={onSearch} />
      </Flex>
      <Flex wrap component="div" justify="center" gap="small">
        {isFetching ? (
          <HomeCardsLoader />
        ) : (
          filteredRestList?.map((restItem, index) => (
            <Link
              to={`/restaurants/${restItem?.info?.id}`}
              key={restItem?.info?.id + index}
            >
              {restItem?.info?.promoted ? (
                <RestCardPromoted restData={restItem} />
              ) : (
                <RestCard restData={restItem} />
              )}
            </Link>
          ))
        )}
      </Flex>
    </Space>
  );
}

export default Content;
