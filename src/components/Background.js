import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-13xl bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[152px] px-[120px] pb-[144.7px] box-border gap-[31.3px] shrink-0 max-w-full text-center text-61xl text-white font-bebas-neue lg:pl-[60px] lg:pr-[60px] lg:box-border mq750:gap-4 mq750:pt-[99px] mq750:px-[30px] mq750:pb-[94px] mq750:box-border ${className}`}
    >
      <div className="self-stretch border-darkslategray border-b-[0.7px] border-solid box-border flex flex-row items-start justify-start pt-2 pb-14 pl-[232px] pr-[223px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[58px] mq750:pr-[55px] mq750:box-border mq1050:pl-[116px] mq1050:pr-[111px] mq1050:box-border">
        <h1 className="m-0 flex-1 relative text-inherit leading-[100%] uppercase font-normal font-[inherit] mq450:text-5xl mq450:leading-[32px] mq1050:text-21xl mq1050:leading-[48px]">
          Capture the moment!
        </h1>
        <div className="h-[144.8px] w-[1018px] relative border-darkslategray border-b-[0.7px] border-solid box-border hidden max-w-full" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-lg-8 text-gray-1300 font-lexend mq1050:flex-wrap mq1050:justify-center">
        <div className="overflow-hidden flex flex-row items-end justify-start pt-[3.9px] px-0 pb-[6.1px]">
          <div className="relative leading-[145%]">alex@gmail.com</div>
          <input className="m-0 h-[22.4px] w-5" type="checkbox" />
        </div>
        <div className="w-[655px] flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0 box-border max-w-full text-base-9">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="w-[380px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[23.7px] mq450:flex-wrap">
                <div className="relative leading-[145%] inline-block min-w-[64px]">
                  Twitter
                </div>
                <div className="flex-1 relative text-base-5 leading-[145%] inline-block min-w-[62px]">
                  Instagram
                </div>
                <div className="w-[60px] relative leading-[145%] flex items-center shrink-0">
                  TikTok
                </div>
                <div className="flex-1 relative text-base-6 leading-[145%] inline-block min-w-[62px]">
                  Facebook
                </div>
              </div>
            </div>
            <div className="w-[150px] flex flex-row items-end justify-start text-lg-3">
              <div className="flex-1 relative leading-[145%]">
                (123) 456 789
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] ml-[-19px]">
                <img className="w-5 h-5 relative" alt="" src="/svg-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
