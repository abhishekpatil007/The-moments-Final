import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ViewServices = ({ className = "" }) => {
  return (
    <div
      className={`w-[1210px] flex flex-row items-center justify-center gap-[97px] max-w-full text-left text-37xl text-white font-bebas-neue mq450:gap-6 mq1275:flex-wrap mq750:gap-12 ${className}`}
    >
      <div className="flex-[0.9027] rounded-3xl overflow-hidden flex flex-col items-center justify-center pt-[548px] px-[27px] pb-[35px] box-border gap-3 bg-[url('/public/frame-3043984@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[361px] max-w-full mq450:flex-wrap mq1275:flex-1 mq750:pt-[356px] mq750:pb-[23px] mq750:box-border mq750:min-w-full">
        <img
          className="h-10 w-10 rounded-lg object-contain"
          alt=""
          src="/frame-3043995-1@2x.png"
        />
        <div className="shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)] [backdrop-filter:blur(14px)] rounded-lg bg-gray-600 flex flex-row items-center justify-center p-1">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/caretright.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-16 min-w-[363px] max-w-full mq450:gap-4 mq1275:flex-1 mq750:gap-8 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-10 max-w-full mq750:gap-5">
          <div className="w-[499px] flex flex-col items-center justify-center gap-4 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] mq450:text-15xl mq450:leading-[34px] mq750:text-26xl mq750:leading-[45px]">
              Wedding Photography
            </h1>
            <div className="relative text-lg leading-[145%] font-lexend text-gray-1300">
              Every moment is unique, and so are our photography sessions. We
              offer a range of services to suit your needs:
            </div>
          </div>
          <div className="self-stretch h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0" />
          <div className="self-stretch flex flex-col items-center justify-center gap-8 max-w-full text-center text-lg text-springgreen font-lexend mq750:gap-4">
            <div className="self-stretch flex flex-row items-center justify-center py-0 pl-0 pr-[3px] box-border gap-4 max-w-full mq750:flex-wrap">
              <div className="h-10 w-10 rounded-980xl bg-gray-1200 flex flex-col items-center justify-center py-[7px] px-0 box-border">
                <div className="self-stretch relative leading-[145%]">01</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-2 min-w-[324px] max-w-full text-left text-white">
                <b className="self-stretch relative leading-[145%]">
                  Capturing Every Detail
                </b>
                <div className="relative leading-[145%] text-gray-1300">
                  From the first look to the last dance, we’ll be there to
                  preserve every special moment of your big day.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 pl-0 pr-[3px] box-border gap-4 max-w-full mq750:flex-wrap">
              <div className="h-10 w-10 rounded-980xl bg-gray-1200 flex flex-col items-center justify-center py-[7px] px-0 box-border">
                <div className="self-stretch relative leading-[145%]">02</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-2 min-w-[324px] max-w-full text-left text-white">
                <b className="self-stretch relative leading-[145%]">
                  Personalized Storytelling
                </b>
                <div className="relative leading-[145%] text-gray-1300">
                  We capture the unique love story of each couple, highlighting
                  your personalities and the emotions of the day.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0" />
        </div>
        <Button
          className="w-[229px] h-[50px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#15201a",
            fontSize: "18",
            background: "#fff",
            borderRadius: "999px",
            "&:hover": { background: "#fff" },
            width: 229,
            height: 50,
          }}
        >
          Capture the moment
        </Button>
      </div>
    </div>
  );
};

ViewServices.propTypes = {
  className: PropTypes.string,
};

export default ViewServices;