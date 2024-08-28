export const promotedCard = (RestaurantCard) => {
  return function card({ restData }) {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard restData={restData} />
      </div>
    );
  };
};
