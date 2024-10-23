import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PortfolioContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-12 max-w-full text-left text-lg text-white font-lexend mq750:gap-6 ${className}`}
    >
      <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase text-springgreen">
        Portfolio
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-12 max-w-full text-37xl font-bebas-neue mq750:gap-6">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] inline-block min-w-[389px] max-w-full mq450:text-15xl mq450:leading-[34px] mq750:text-26xl mq750:leading-[45px] mq750:min-w-full">
          <span>{`See the `}</span>
          <span className="text-springgreen">Moments We’ve Captured</span>
        </h1>
        <div className="flex-1 relative text-lg leading-[145%] font-lexend text-gray-1300 inline-block min-w-[388px] max-w-full mq750:min-w-full">
          Take a look at some of our favorite work. Each photo tells its own
          story, and we can’t wait to help you tell yours. Whether it’s the joy
          of a wedding, the excitement of a graduation, or the warmth of family
          time, we capture it all with care and creativity.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-[898px] relative gap-3 text-center mq450:pr-5 mq450:box-border mq1275:pr-[449px] mq1275:box-border mq750:pr-56 mq750:box-border">
        <Button
          className="h-[50px] flex-1 min-w-[105px]"
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
        <div className="flex-1 rounded-980xl flex flex-row items-center justify-center py-3 px-[23px] box-border min-w-[111px]">
          <div className="flex-1 relative [text-decoration:underline] leading-[145%]">
            View portfolio
          </div>
        </div>
        <div className="h-10 !m-[0] absolute top-[5px] left-[1150px] flex flex-row items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-lg object-contain"
            loading="lazy"
            alt=""
            src="/frame-3043995@2x.png"
          />
          <div className="shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)] [backdrop-filter:blur(14px)] rounded-lg bg-gray-600 flex flex-row items-center justify-start p-1">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/caretright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioContent.propTypes = {
  className: PropTypes.string,
};

export default PortfolioContent;
