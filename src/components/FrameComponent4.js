import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full text-left text-lg text-springgreen font-lexend ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[129px] max-w-full mq450:gap-4 mq1275:gap-16 mq750:gap-8 mq1100:flex-wrap">
        <div className="w-[505px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-16 mq450:gap-4 mq750:gap-8">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-4">
              <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
                About us
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-8 text-37xl text-white font-bebas-neue mq750:gap-4">
                <h1 className="m-0 self-stretch relative text-inherit leading-[100%] uppercase font-normal font-[inherit] mq450:text-15xl mq450:leading-[34px] mq750:text-26xl mq750:leading-[45px]">
                  Meet The moments
                </h1>
                <div className="relative text-lg leading-[145%] font-lexend text-gray-1300">
                  <p className="m-0">{`Welcome to The Moments! `}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`We're a passionate group of photographers dedicated to freezing time through our lenses. Whether it's a wedding, family portrait, or just everyday life, we believe every moment deserves to be captured. `}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Our friendly and experienced team loves making you feel
                    comfortable in front of the camera so that your natural
                    beauty shines through. Let us be a part of your story and
                    help you hold on to your most precious memories forever.
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[158px] gap-3 text-center text-white mq450:flex-wrap mq450:pr-5 mq450:box-border mq750:pr-[79px] mq750:box-border">
              <Button
                className="h-[50px] w-[161px]"
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
              <div className="flex-1 rounded-980xl flex flex-row items-center justify-center py-3 px-[23px] box-border min-w-[113px]">
                <div className="flex-1 relative [text-decoration:underline] leading-[145%]">
                  More about us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[684px] flex-1 rounded-t-2xl rounded-b-none overflow-hidden flex flex-col items-start justify-start min-w-[395px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[865px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/image-26@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
