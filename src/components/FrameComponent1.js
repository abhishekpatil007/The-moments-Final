import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", bookingDetails }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[100px] pb-[76px] box-border max-w-full text-left text-lg text-springgreen font-lexend mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[50px] mq750:pr-[50px] mq750:pb-[49px] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-2xl bg-gray-1200 overflow-hidden flex flex-row items-start justify-start pt-[98px] px-12 pb-[72px] box-border relative gap-2.5 max-w-full mq750:pt-16 mq750:px-6 mq750:pb-[47px] mq750:box-border">
        <img
          className="h-[1394.6px] w-[1166px] !m-[0] absolute right-[-427px] bottom-[-459.6px] object-contain"
          alt=""
          src={bookingDetails}
        />
        <div className="w-[501px] flex flex-col items-start justify-center gap-16 max-w-full z-[1] mq450:gap-4 mq750:gap-8">
          <div className="self-stretch flex flex-col items-start justify-center gap-6">
            <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
              Book a call
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-37xl text-white font-bebas-neue">
              <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] mq450:text-15xl mq450:leading-[34px] mq750:text-26xl mq750:leading-[45px]">
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
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  bookingDetails: PropTypes.string,
};

export default FrameComponent1;
