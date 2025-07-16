import facebook from "../images/Facebook-Logo.png";

export const Image = ({
  src,
  alt = "",
  width = "100px",
  height = "100px",
  ...props
}) => {
  return <img src={src} alt={alt} style={{ width, height }} {...props} />;
};

export const Images = {
  facebook,
};
