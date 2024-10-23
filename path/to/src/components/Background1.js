import PropTypes from "prop-types";

const Background1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-13xl bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[152px] px-[211px] pb-[144.9px] box-border gap-[31.2px] max-w-full text-center text-61xl text-white font-bebas-neue 
      mq450:pl-5 mq450:pr-5 mq450:box-border mq450:pt-10 mq450:px-4 mq450:pb-10 
      mq750:gap-4 mq750:pt-[99px] mq750:px-[105px] mq750:pb-[94px] mq750:box-border ${className}`}
    >
      <div className="self-stretch border-darkslategray border-b-[0.7px] border-solid box-border flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="self-stretch w-[1018px] relative border-darkslategray border-b-[0.7px] border-solid box-border hidden max-w-full" />
        <div className="flex-1 border-darkslategray border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-1.5 pb-[55px] pl-[232px] pr-[221px] max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[58px] mq750:pr-[55px] mq750:box-border mq1100:pl-[116px] mq1100:pr-[110px] mq1100:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[100%] uppercase font-normal font-[inherit] mq450:text-5xl mq450:leading-[32px] mq750:text-21xl mq750:leading-[48px]">
            Capture the moment!
          </h1>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-0 px-0 pb-[0.1px] box-border max-w-full gap-5 z-[1] text-left text-lg-8 text-gray-1300 font-lexend 
        mq450:flex-col mq450:items-center mq450:gap-4 mq450:text-center">
        <div className="w-[237px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[145%]">
            themoments@gmail.com
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[11px] box-border max-w-full text-base-9 
          mq450:flex-row mq450:justify-center mq450:gap-2 mq450:items-center">
          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[5px] pb-2 pl-3 pr-0 box-border gap-[150px] max-w-full mq450:gap-[75px]">
            <img
              className="ml-[-170px] h-5 w-5 relative shrink-0"
              loading="lazy"
              alt=""
              src="/svg.svg"
            />
            <div className="w-[380px] flex flex-row items-start justify-start gap-[23.7px] shrink-0 max-w-full mq450:flex-wrap">
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
        </div>
        <div className="w-[150px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-lg-3 
          mq450:w-full mq450:text-center mq450:items-center">
          <div className="self-stretch flex flex-row items-end justify-start">
            <div className="flex-1 relative leading-[145%]">(123) 456 789</div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] ml-[-19px]">
              <img className="w-5 h-5 relative" alt="" src="/svg-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
