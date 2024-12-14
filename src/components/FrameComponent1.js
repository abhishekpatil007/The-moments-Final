import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[100px] pb-[76px] box-border max-w-full text-left text-lg text-springgreen font-lexend mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[50px] mq750:pr-[50px] mq750:pb-[49px] mq750:box-border ${className}`}
    >
      <img
        className="w-full h-auto"
        alt="Frame"
        src="/framelg.svg"
      />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
