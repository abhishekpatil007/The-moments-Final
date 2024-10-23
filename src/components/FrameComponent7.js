import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full text-left text-5xl text-white font-poppins mq450:gap-[18px] mq750:min-w-full mq1050:gap-9 ${className}`}
    >
      <div className="w-[651px] flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-12 max-w-full text-lg text-springgreen font-lexend mq750:gap-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
            Our team
          </div>
          <h1 className="m-0 self-stretch relative text-37xl tracking-[0.01em] leading-[140%] font-normal font-bebas-neue text-white mq450:text-15xl mq450:leading-[47px] mq1050:text-26xl mq1050:leading-[63px]">
            <span>{`Meet your `}</span>
            <span className="text-springgreen">Team</span>
          </h1>
          <div className="relative leading-[140%] text-gray-1300">
            Our dynamic team channels their expertise into innovative solutions
            that transform browsers into buyers and clicks into loyal fans.
            Think of us as your growth partners, always one step ahead and ready
            to turn the ‘what ifs’ into ‘what’s next.’
          </div>
        </div>
        <Button
          className="w-[161px] h-[50px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#15201a",
            fontSize: "18",
            background: "#fff",
            borderRadius: "999px",
            "&:hover": { background: "#fff" },
            width: 161,
            height: 50,
          }}
        >
          Work with us
        </Button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-px box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[69px] max-w-full mq450:gap-[17px] mq750:flex-wrap mq1050:gap-[34px]">
          <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start pt-[293px] px-0 pb-0 box-border bg-[url('/public/frame-1000001876@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[240px] max-w-full mq450:pt-[190px] mq450:box-border">
            <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[104px] mq450:text-lgi mq450:leading-[27px]">
                Princess
              </div>
              <div className="relative text-lg leading-[140%] font-semibold">
                Role in company
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start pt-[298px] px-0 pb-0 box-border bg-[url('/public/frame-1000001877@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[240px] max-w-full mq450:pt-[194px] mq450:box-border">
            <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[93px] mq450:text-lgi mq450:leading-[27px]">
                Nichole
              </div>
              <div className="relative text-lg leading-[140%] font-semibold">
                Role in company
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[77px] max-w-full mq450:gap-[19px] mq750:flex-wrap mq1050:gap-[38px]">
        <div className="h-[400px] w-[370px] rounded-3xl overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="ml-[-9px] w-[387px] flex flex-row items-start justify-start pt-[293px] pb-[115px] pl-[9px] pr-2 box-border bg-[url('/public/img-9946-1@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 max-w-[105%] mq750:pt-[190px] mq750:pb-[75px] mq750:box-border">
            <img
              className="h-[515px] w-[387px] relative object-cover hidden max-w-full"
              alt=""
              src="/img-9946-1@2x.png"
            />
            <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full z-[1]">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[69px] mq450:text-lgi mq450:leading-[27px]">
                Mony
              </div>
              <div className="relative text-lg leading-[140%] font-semibold">
                Role in company
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start pt-[293px] px-0 pb-0 box-border bg-[url('/public/frame-1000001880@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[240px] max-w-full mq450:pt-[190px] mq450:box-border">
          <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] flex flex-col items-start justify-start py-6 pl-6 pr-5 box-border max-w-full">
            <div className="relative leading-[140%] font-semibold mq450:text-lgi mq450:leading-[27px]">
              Ale
            </div>
            <div className="relative text-lg leading-[140%] font-semibold">
              Role in company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
