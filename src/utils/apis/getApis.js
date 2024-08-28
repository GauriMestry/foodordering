import { MENU_API_URL, RESTAURANTS_DATA } from "../constant";

export const getRestaurants = async () => {
  const response = await fetch(RESTAURANTS_DATA);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getRestMenus = async (restId) => {
  const response = await fetch(`${MENU_API_URL}${restId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
