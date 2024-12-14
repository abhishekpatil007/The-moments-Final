import Container from "../components/Container";
import GalleryNavigation from "../components/GalleryNavigation";
import CallToAction from "../components/CallToAction";
import Background from "../components/Background";

const Gallery = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start py-0 px-[3px] box-border gap-[52px] leading-[normal] tracking-[normal] mq750:gap-[26px]">
      <Container />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="h-[3370px] w-[1258px] flex flex-col items-end justify-start pt-0 px-0 pb-[570px] box-border gap-[120px] max-w-full lg:pb-60 lg:box-border mq1050:h-auto mq1050:pb-[156px] mq1050:box-border mq450:gap-[30px] mq750:gap-[60px] mq750:pb-[101px] mq750:box-border">
          <GalleryNavigation />
          <CallToAction className="mb-8 " />
          <Background />
        </section>
      </main>
    </div>
  );
};

export default Gallery;
