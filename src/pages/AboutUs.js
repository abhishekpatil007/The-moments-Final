import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start gap-20 leading-[normal] tracking-[normal] mq450:gap-5 mq750:gap-10">
      <FrameComponent5 />
      <FrameComponent8 />
      <div className="w-[408px] h-[387px] relative overflow-hidden shrink-0 hidden max-w-full z-[2]" />
      <FrameComponent9 />
      <section className="w-[1406px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full lg:pb-[52px] lg:box-border mq750:pb-[34px] mq750:box-border">
        <div className="w-[1242px] flex flex-row items-end justify-start gap-[54px] max-w-full mq750:gap-[27px] mq1050:flex-wrap">
          <FrameComponent7 />
          <FrameComponent6 />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
