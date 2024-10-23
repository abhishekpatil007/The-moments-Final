import { useMemo } from "react";
import PropTypes from "prop-types";

const GalleryRows = ({
  className = "",
  propBackgroundImage,
  heading4TimelessElegance,
  weddingPhotography,
  galleryImageButtons,
}) => {
  const galleryImageRowsStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`w-[497px] rounded-2xl bg-gray-300 shrink-0 flex flex-row items-start justify-start p-3 box-border max-w-full text-left text-lg text-white font-lexend ${className}`}
    >
      <div
        className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start pt-[434px] px-4 pb-4 box-border bg-[url('/public/gallery-image-rows@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[282px] mq750:pb-5 mq750:box-border"
        style={galleryImageRowsStyle}
      >
        <div className="flex-1 [backdrop-filter:blur(14px)] rounded-xl bg-gray-500 flex flex-row items-start justify-between p-3 box-border max-w-full gap-5 mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[145%]">
              {heading4TimelessElegance}
            </b>
            <div className="relative text-sm leading-[145%]">
              {weddingPhotography}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 text-sm">
            <div className="relative leading-[25.2px] inline-block min-w-[36px]">
              {galleryImageButtons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryRows.propTypes = {
  className: PropTypes.string,
  heading4TimelessElegance: PropTypes.string,
  weddingPhotography: PropTypes.string,
  galleryImageButtons: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default GalleryRows;
