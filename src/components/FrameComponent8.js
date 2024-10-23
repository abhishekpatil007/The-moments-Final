import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1390px] flex flex-row items-start justify-center pt-0 px-5 pb-[115.4px] box-border max-w-full text-center text-lg text-springgreen font-lexend mq750:pb-[75px] mq750:box-border ${className}`}
    >
      <div className="w-[634px] flex flex-col items-center justify-center gap-16 max-w-full mq450:gap-4 mq750:gap-8">
        <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-4">
          <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
            About us
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-8 text-37xl text-white font-bebas-neue mq750:gap-4">
            <h1 className="m-0 self-stretch relative text-inherit leading-[100%] uppercase font-normal font-[inherit] mq450:text-15xl mq450:leading-[34px] mq1050:text-26xl mq1050:leading-[45px]">
              Meet The moments
            </h1>
            <div className="relative text-lg leading-[145%] font-lexend text-gray-1300">
              <p className="m-0">{`Welcome to The Moments! `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`We're a passionate group of photographers dedicated to freezing time through our lenses. Whether it's a wedding, family portrait, or just everyday life, we believe every moment deserves to be captured. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Our friendly and experienced team loves making you feel
                comfortable in front of the camera so that your natural beauty
                shines through. Let us be a part of your story and help you hold
                on to your most precious memories forever.
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-[236px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[118px] mq750:pr-[118px] mq750:box-border">
          <Button
            className="h-[50px] flex-1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#15201a",
              fontSize: "18",
              background: "#fff",
              borderRadius: "999px",
              "&:hover": { background: "#fff" },
              height: 50,
            }}
          >
            Work with us
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
