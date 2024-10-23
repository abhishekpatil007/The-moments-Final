import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CallToAction = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[9px] box-border max-w-full text-left text-lg text-springgreen font-lexend ${className}`}
    >
      <div className="h-[540px] flex-1 relative rounded-2xl bg-gray-1200 overflow-hidden max-w-full">
        <div className="absolute top-[calc(50%_-_172px)] left-[48px] w-[501px] flex flex-col items-start justify-center gap-16 max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-start justify-center gap-6">
            <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
              Book a call
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-37xl text-white font-bebas-neue">
              <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] mq1050:text-26xl mq1050:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                <span>Let’s</span>
                <span className="text-springgreen">
                  {" "}
                  Capture Your Special Moment
                </span>
              </h1>
              <div className="relative text-lg leading-[145%] font-lexend text-gray-1100">
                Ready to turn your special moments into beautiful memories?
                Reach out today to schedule your session. We’re excited to work
                with you!
              </div>
            </div>
          </div>
          <Button
            className="w-[145px] h-[50px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#15201a",
              fontSize: "18",
              background: "#fff",
              borderRadius: "999px",
              "&:hover": { background: "#fff" },
              width: 145,
              height: 50,
            }}
          >
            Book a call
          </Button>
        </div>
        <div className="absolute top-[-395px] left-[501px] w-[839px] h-[1394.6px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1166px] object-contain"
            alt=""
            src="/frame-3043980@2x.png"
          />
          <div className="absolute top-[395px] left-[50px] [background:linear-gradient(180deg,_#1b1b1b,_rgba(27,_27,_27,_0))] w-[842px] h-[122px] z-[1]" />
          <div className="absolute top-[1067px] left-[891px] [background:linear-gradient(180deg,_#1b1b1b,_rgba(27,_27,_27,_0))] w-[786px] h-[122px] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]" />
        </div>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
