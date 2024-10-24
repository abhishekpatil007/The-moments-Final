import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl flex flex-row items-start justify-start p-6 box-border max-w-full text-left text-61xl text-white font-bebas-neue mq750:pt-5 mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-2xl flex flex-col items-start justify-start pt-[29px] px-[73px] pb-24 box-border relative gap-[205px] max-w-full lg:gap-[102px] lg:pl-9 lg:pr-9 lg:box-border mq450:gap-[26px] mq750:gap-[51px] mq750:pt-5 mq750:pb-[62px] mq750:box-border">
        <img
          className="w-full h-full absolute !m-[0] right-[0px] bottom-0 left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/image-25@2x.png"
        />
        <div className="w-full h-full absolute !m-[0] top-0 left-0 bg-gray-700 z-[1]" />
        <FrameComponent
          frameButtonFlex="0.7027"
          propColor="rgba(255, 255, 255, 0.7)"
          propFontWeight="unset"
          propFlex="0.8649"
          propColor1="#fff"
          propMinWidth="64px"
          propFontWeight1="bold"
          propColor2="rgba(255, 255, 255, 0.7)"
          propFontWeight2="unset"
        />
        <div className="w-[720px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] z-[2] mq1050:text-21xl mq1050:leading-[48px] mq450:text-5xl mq450:leading-[32px]">
                <span>{`Our `}</span>
                <span className="text-springgreen">Photo wall</span>
              </h1>
              <div className="w-[694px] relative text-lg leading-[145%] font-lexend text-gray-1100 flex items-center max-w-full z-[2]">
                Here, you can take a look at the work we done so far. Every
                shoot with passion and dedication. You can become part of our
                photo wall now!
              </div>
            </div>
            <div className="w-[241px] rounded-980xl bg-white flex flex-row items-start justify-start py-3 pl-6 pr-[23px] box-border z-[2] text-center text-lg text-gray-100 font-lexend">
              <div className="flex-1 relative leading-[145%]">
                Capture your moment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
