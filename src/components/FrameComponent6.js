import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[61px] min-w-[371px] max-w-full text-left text-5xl text-white font-poppins mq450:gap-[30px] mq450:min-w-full mq1050:flex-1 ${className}`}
    >
      {/* <div className="self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start pt-[293px] px-0 pb-0 box-border bg-[url('/public/frame-1000001875@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[190px] mq450:box-border">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full">
          <div className="relative leading-[140%] font-semibold mq450:text-lgi mq450:leading-[27px]">
            Margo Andros
          </div>
          <div className="relative text-lg leading-[140%] font-semibold inline-block min-w-[77px]">
            Founder
          </div>
        </div>
      </div> */}
      {/* <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
        <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start pt-[293px] px-0 pb-0 box-border bg-[url('/public/frame-1000001878@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[190px] mq450:box-border">
          <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full">
            <div className="relative leading-[140%] font-semibold mq450:text-lgi mq450:leading-[27px]">
              Faby
            </div>
            <div className="relative text-lg leading-[140%] font-semibold">
              Role in company
            </div>
          </div>
        </div>
      </div> */}
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        {/* <div className="flex-1 rounded-3xl overflow-hidden flex flex-col items-start justify-start pt-[300px] px-0 pb-0 box-border max-w-full mq450:pt-[195px] mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[401.8px] w-[399.8px] absolute !m-[0] top-[-301.1px] right-[-15.2px] rounded-lg object-contain"
              loading="lazy"
              alt=""
              src="/picture-polaroid-600-format@2x.png"
            />
            <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full z-[1]">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[91px] mq450:text-lgi mq450:leading-[27px]">
                Kseniia
              </div>
              <div className="relative text-lg leading-[140%] font-semibold">
                Role in company
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
