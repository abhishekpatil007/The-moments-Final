import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[82px] box-border max-w-full text-left text-61xl text-white font-bebas-neue mq1275:pb-[53px] mq1275:box-border mq750:pb-[34px] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-xl flex flex-row items-start justify-start p-6 box-border max-w-full mq1100:pt-5 mq1100:pb-5 mq1100:box-border">
        <div className="flex-1 rounded-2xl flex flex-col items-start justify-start pt-[29px] px-[76px] pb-[120px] box-border relative gap-[461px] bg-[url('/public/image-251@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[58px] mq1275:gap-[230px] mq1275:pl-[38px] mq1275:pr-[38px] mq1275:box-border mq750:gap-[115px] mq750:pb-[51px] mq750:box-border mq1100:pt-5 mq1100:pb-[78px] mq1100:box-border">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
            alt=""
            src="/image-251@2x.png"
          />
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-700 z-[1]" />
          <FrameComponent />
          <div className="w-[714px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
              <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[100%] uppercase z-[2] font-[inherit] mq450:text-5xl mq450:leading-[32px] mq750:text-21xl mq750:leading-[48px]">
                  <span>
                    <span className="text-white">{`We `}</span>
                    <span className="text-springgreen">Capture MOments</span>
                    <span> with amazing photography</span>
                  </span>
                </h1>
                <div className="w-[694px] relative text-lg leading-[145%] font-lexend text-gray-1100 flex items-center max-w-full z-[2]">
                  At The Moments, we turn your special memories into timeless
                  photographs that you’ll cherish forever with our team of
                  trained and experience photographers.
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
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
