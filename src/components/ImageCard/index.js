import "./index.css";

export const Imagescard = (props) => {
  const { imagedata } = props;
  const { firstImage, firstHeading } = imagedata;

  const backgroundImage = `url("${firstImage}")`;
  console.log(backgroundImage);
  return (
    <div
      style={{
        backgroundImage: `url(${firstImage})`,
        height: "70vh",
        width: "49vw",
        borderRadius: "20px",
        backgroundSize: "cover",
      }}
      className="image"
    >
      <h1 className="image-heading">{firstHeading}</h1>
      <button>show all</button>
    </div>
  );
};
