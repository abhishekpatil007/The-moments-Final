import GalleryRows from "./GalleryRows";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0.5 box-border max-w-full text-left text-lg text-white font-lexend ${className}`}
    >
      <div className="w-[1539px] flex flex-row items-start justify-start max-w-[125%] shrink-0">
        <div className="w-[1332px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-6 max-w-full">
          <GalleryRows
            heading4TimelessElegance={`Emma & Patrick`}
            weddingPhotography="Wedding Photography"
            galleryImageButtons="2022"
          />
          <GalleryRows
            propBackgroundImage="url('/frame-3044038@3x.png')"
            heading4TimelessElegance="Coop Corporated"
            weddingPhotography="Corporate Photography"
            galleryImageButtons="2024"
          />
          <GalleryRows
            propBackgroundImage="url('/frame-30440381@3x.png')"
            heading4TimelessElegance="Sana B"
            weddingPhotography="Birthday Photography"
            galleryImageButtons="2022"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
