import facebook from "../images/Facebook-Logo.png";
import avatar from "../images/avatar.jpg";

export const Image = ({
  src,
  alt = "",
  width = "100px",
  height = "100px",
  style,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width, height, ...style }}
      {...props}
    />
  );
};

export const Images = {
  facebook,
  avatar,
};
