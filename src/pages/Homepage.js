import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import PortfolioContent from "../components/PortfolioContent";
import FrameComponent3 from "../components/FrameComponent3";
import ServiceList from "../components/ServiceList";
import ViewServices from "../components/ViewServices";
import FrameComponent1 from "../components/FrameComponent1";
import Background1 from "../components/Background1";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <FrameComponent4 />
      <section className="self-stretch bg-gray-200 overflow-hidden flex flex-col items-center justify-center py-[120px] px-[98px] box-border gap-20 max-w-full mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pt-[78px] mq1275:pb-[78px] mq1275:box-border mq750:gap-10 mq750:py-[51px] mq750:px-[49px] mq750:box-border">
        <PortfolioContent />
        <FrameComponent3 />
      </section>
      <section className="ml-[-5px] mb-20 self-stretch [background:linear-gradient(180deg,_#171717,_#121212)] overflow-hidden flex flex-col items-center justify-center pt-[120px] pb-[123px] pl-[105px] pr-[101px] box-border gap-16 max-w-full text-center text-lg text-springgreen font-lexend mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pt-[78px] mq1275:pb-20 mq1275:box-border mq750:gap-8 mq750:pt-[51px] mq750:pb-[52px] mq750:pl-[52px] mq750:pr-[50px] mq750:box-border">
        <div className="w-[1218px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[544px] flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <div className="flex-1 relative tracking-[0.3em] leading-[145%] uppercase inline-block max-w-full">
                Services
              </div>
            </div>
            <h1 className="m-0 relative text-37xl tracking-[0.01em] leading-[100%] uppercase font-normal font-bebas-neue text-white mq450:text-15xl mq450:leading-[34px] mq750:text-26xl mq750:leading-[45px]">
              <span>{`Photography `}</span>
              <span className="text-springgreen">Services Tailored to You</span>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full text-gray-1300">
              <div className="flex-1 relative leading-[145%] inline-block max-w-full">
                Every moment is unique, and so are our photography sessions. We
                offer a range of services to suit your needs:
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-14 max-w-full mq750:gap-7">
          <ServiceList />
          <ViewServices />
        </div>
      </section>
      <FrameComponent1 bookingDetails="/booking-details@2x.png" />
      <Background1 />
    </div>
  );
};

export default Homepage;
