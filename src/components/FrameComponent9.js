import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1506.6px] relative max-w-full text-left text-lg text-springgreen font-lexend lg:h-auto lg:min-h-[1506.6] ${className}`}
    >
      <div className="absolute top-[-200px] left-0 rounded-2xl w-full h-auto overflow-hidden flex flex-col items-center justify-center max-w-full z-[2]">
        <img
          className="w-full h-auto max-h-[100vh] object-cover"  // Adjusted for responsiveness
          alt=""
          src="/Group-1.png"  // Single image source
        />
      </div>
      <div className="absolute top-[358.6px] left-[0px] w-full flex flex-row items-start justify-start max-w-full">
        <div className="h-[705.7px] w-[857.7px] absolute !m-[0] top-[-522.5px] right-[0px]">
          {/* Removed additional images */}
        </div>
        <div className="flex-1 bg-gray-200 overflow-hidden flex flex-col items-start justify-start py-[120px] px-[98px] box-border gap-[62px] max-w-full z-[4] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[31px] mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-12 max-w-full mq750:gap-6">
            <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
              Core Values
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-12 max-w-full text-37xl text-white font-bebas-neue mq750:gap-6">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] inline-block min-w-[389px] max-w-full mq450:text-15xl mq450:leading-[34px] mq750:min-w-full mq1050:text-26xl mq1050:leading-[45px]">
                <span>{`We make sure to `}</span>
                <span className="text-springgreen">
                  Deliver photogrpahy with:
                </span>
              </h1>
              <div className="flex-1 relative text-lg leading-[145%] font-lexend text-gray-1300 inline-block min-w-[388px] max-w-full mq750:min-w-full">
                At The Moments, we believe that photography is more than just
                taking pictures—it’s about capturing the heart and soul of
                life’s most meaningful moments. Our core values reflect our
                commitment to creating an experience that’s as special as the
                memories we capture.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative gap-3">
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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0.5 box-border max-w-full text-13xl text-white font-bebas-neue">
            <div className="w-[1332px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-6 max-w-[109%]">
              <div className="rounded-2xl bg-gray-300 flex flex-row items-start justify-start p-3 box-border max-w-full">
                <div className="rounded-xl overflow-hidden flex flex-col items-start justify-start py-10 pl-6 pr-5 box-border gap-[270px] bg-[url('/public/frame-30440382@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:gap-[135px]">
                  <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[140%] font-normal font-[inherit] mq450:text-lgi mq450:leading-[27px] mq1050:text-7xl mq1050:leading-[36px]">
                    Authenticity
                  </h2>
                  <div className="w-[425px] relative text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1300 flex items-center max-w-full">
                    We believe in capturing the true essence of every moment.
                    Whether it’s a joyful celebration or a quiet, intimate
                    glance, we focus on bringing out the genuine emotions and
                    connections that make your moments unique
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gray-300 flex flex-row items-start justify-start p-3 box-border max-w-full">
                <div className="rounded-xl overflow-hidden flex flex-col items-start justify-start py-10 pl-6 pr-5 box-border gap-[270px] bg-[url('/public/frame-30440383@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:gap-[135px]">
                  <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[140%] font-normal font-[inherit] mq450:text-lgi mq450:leading-[27px] mq1050:text-7xl mq1050:leading-[36px]">
                    Creativity
                  </h2>
                  <div className="w-[425px] relative text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1300 flex items-center max-w-full">
                    Every session is a new opportunity for us to tell a story
                    through the lens. We approach each project with fresh ideas
                    and artistic vision, ensuring your photos are not only
                    beautiful but also one-of-a-kind.
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gray-300 flex flex-row items-start justify-start p-3 box-border max-w-full">
                <div className="rounded-xl overflow-hidden flex flex-col items-start justify-start py-10 pl-6 pr-5 box-border gap-[270px] bg-[url('/public/frame-30440384@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:gap-[135px]">
                  <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[140%] font-normal font-[inherit] mq450:text-lgi mq450:leading-[27px] mq1050:text-7xl mq1050:leading-[36px]">
                    Connection
                  </h2>
                  <div className="w-[425px] relative text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1300 flex items-center max-w-full">
                    Building a strong relationship with our clients is at the
                    heart of what we do. We take the time to get to know you,
                    ensuring that every photo reflects your personality and the
                    special moments that matter most to you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
