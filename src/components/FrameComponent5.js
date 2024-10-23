import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full text-left text-61xl text-white font-bebas-neue ${className}`}
    >
      <div className="flex-1 rounded-xl flex flex-row items-start justify-start p-6 box-border max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border">
        <div className="flex-1 rounded-2xl flex flex-col items-start justify-start pt-[29px] px-[73px] pb-[72px] box-border relative gap-[123px] max-w-full lg:gap-[61px] lg:pl-9 lg:pr-9 lg:box-border mq450:gap-[15px] mq750:gap-[31px] mq750:pt-5 mq750:pb-[47px] mq750:box-border">
          <img
            className="w-full h-[930px] absolute !m-[0] right-[0px] bottom-[-258px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-25@2x.png"
          />
          <div className="w-[1416px] h-[930px] absolute !m-[0] top-[calc(50%_-_465px)] left-[calc(50%_-_708px)] bg-gray-700 z-[1]" />
          <FrameComponent
            frameButtonFlex="0.6667"
            propColor="rgba(255, 255, 255, 0.7)"
            propFontWeight="unset"
            propFlex="0.7692"
            propColor1="rgba(255, 255, 255, 0.7)"
            propMinWidth="59px"
            propFontWeight1="unset"
            propColor2="#fff"
            propFontWeight2="bold"
          />
          <div className="w-[720px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
              <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] z-[2] mq450:text-5xl mq450:leading-[32px] mq1050:text-21xl mq1050:leading-[48px]">
                  <span>{`We `}</span>
                  <span className="text-springgreen">
                    capture special moments
                  </span>
                  <span> For you</span>
                </h1>
                <div className="w-[694px] relative text-lg leading-[145%] font-lexend text-gray-1100 flex items-center max-w-full z-[2]">
                  We're a passionate group of photographers dedicated to
                  freezing time through our lenses. Whether it's a wedding,
                  family portrait, or just everyday life, we believe every
                  moment deserves to be captured.
                </div>
              </div>
              <Button
                className="w-[161px] h-[50px] z-[2]"
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
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
