import { useQuery } from "@tanstack/react-query";
import { getRestMenus } from "../apis/getApis";

export default function useRestaurantDetails(restId) {
  const { data: restMenus, isFetching } = useQuery({
    queryKey: ["restMenus", restId],
    queryFn: () => getRestMenus(restId),
  });

  const { cards } = restMenus?.data ?? {};

  const getNestedProperty = (path, defaultValue = {}) => {
    return path.reduce((acc, key) => acc && acc[key], cards) ?? defaultValue;
  };

  const restMainInfo = getNestedProperty([2, "card", "card", "info"], {});

  const categories = getNestedProperty(
    [
      4,
      "groupedCard",
      "cardGroupMap",
      "REGULAR",
      "cards",
      1,
      "card",
      "card",
      "categories",
    ],
    getNestedProperty(
      [
        4,
        "groupedCard",
        "cardGroupMap",
        "REGULAR",
        "cards",
        1,
        "card",
        "card",
        "itemCards",
      ],
      getNestedProperty(
        [
          4,
          "groupedCard",
          "cardGroupMap",
          "REGULAR",
          "cards",
          1,
          "card",
          "card",
          "carousel",
        ],
        []
      )
    )
  );

  const offers = getNestedProperty(
    [3, "card", "card", "gridElements", "infoWithStyle", "offers"],
    []
  );

  return { restMainInfo, isFetching, categories, offers };
}
