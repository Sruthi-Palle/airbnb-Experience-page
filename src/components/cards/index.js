import "./index.css";

export const Cards = (props) => {
  console.log(props);
  const { cardData } = props;
  const { name, description, price, image, location, reviews, reviews_count } =
    cardData;
  return (
    <div className="margin-card">
      <img src={image} className="card-image" />
      <p className="rating">
        Rating:{reviews} {location}
      </p>
      <p className="name">{name}</p>
      <p className="rating">From ${price}</p>
    </div>
  );
};
