import Marquee from "react-fast-marquee";

const MarqueElement = ({ children, direction = "left" }) => {
  return (
    <Marquee direction={direction} speed={50} className="py-3">
      {children}
    </Marquee>
  );
};

export default MarqueElement;
