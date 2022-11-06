import "./index.css";

export const Imagescard = (props) => {
  const { imagedata } = props;
  const { firstImage, firstHeading } = imagedata;

  return (
    <div>
      <img src={firstImage} className="image" />
      <h1>{firstHeading}</h1>
    </div>
  );
};
