import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start gap-20 leading-[normal] tracking-[normal] mq450:gap-5 mq750:gap-10">
      <FrameComponent5 />
      <FrameComponent6 />
      <Footer />
    </div>
  );
};

export default Services;