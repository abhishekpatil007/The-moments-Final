import FrameComponent1 from "./FrameComponent1";
import Background from "./Background";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-61xl text-white font-bebas-neue ${className}`}
    >
      <div className="h-[1047px] w-[1258px] flex flex-col items-start justify-start pt-0 px-0 pb-[507px] box-border gap-[78px] max-w-full lg:pb-[330px] lg:box-border mq450:gap-[19px] mq450:pb-[139px] mq450:box-border mq750:gap-[39px] mq1050:h-auto mq1050:pb-[214px] mq1050:box-border">
        <FrameComponent1 bookingDetails="/placeholder@2x.png" />
        <Background />
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
