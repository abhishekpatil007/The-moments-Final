import PropTypes from "prop-types";

const GalleryNavigation = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[9px] box-border max-w-full shrink-0 text-left text-5xl text-white font-bebas-neue ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full">
        <div className="rounded-2xl bg-gray-1200 flex flex-col items-start justify-start py-10 px-6 gap-12 mq1050:hidden mq1050:pt-[26px] mq1050:pb-[26px] mq1050:box-border mq450:gap-6 mq750:pt-5 mq750:pb-5 mq750:box-border">
          <div className="w-[65.5px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="w-[65.5px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="flex flex-row items-start justify-start py-0 pl-[76px] pr-[77px]">
              <div className="relative tracking-[0.06em] leading-[100%] mq450:text-lgi mq450:leading-[19px]">
                Weddings
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-gray-1000">
              <div className="self-stretch rounded-lg bg-gray-1200 flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px] text-springgreen">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">{`Emma & Patrick`}</div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Family Portraits
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Events
                </div>
              </div>
            </div>
          </div>
          <div className="w-[78.5px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="w-[78.5px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="flex flex-row items-start justify-start py-0 px-[90px]">
              <div className="relative tracking-[0.06em] leading-[100%] mq450:text-lgi mq450:leading-[19px]">{`Family `}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-gray-1000">
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Sharmas
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Kumar and family
                </div>
              </div>
            </div>
          </div>
          <div className="w-[76px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="w-[76px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="flex flex-row items-start justify-start py-0 pl-[88px] pr-[87px]">
              <div className="relative tracking-[0.06em] leading-[100%] inline-block min-w-[65px] mq450:text-lgi mq450:leading-[19px]">{`Events `}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-gray-1000">
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Viraj Birthday
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  DigiFest
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="w-[65px] h-0.5 relative rounded-980xl bg-gray-900 overflow-hidden shrink-0 hidden" />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="flex flex-row items-start justify-start py-0 px-[76px]">
              <div className="relative tracking-[0.06em] leading-[100%] mq450:text-lgi mq450:leading-[19px]">
                LIfestyle
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-gray-1000">
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Landscapes
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-2.5 pl-6 pr-[23px]">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
                  Cityscapes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-[calc(100%_-_313px)] text-39xl lg:pt-5 lg:pb-5 lg:box-border mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq450:gap-4">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[100%] uppercase font-normal font-[inherit] mq1050:text-27xl mq1050:leading-[46px] mq450:text-16xl mq450:leading-[35px]">{`Emma & Patrick’s Wedding`}</h1>
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-x-[18px] gap-y-6 max-w-full">
              <img
                className="w-[876px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/frame-3044012@2x.png"
              />
              <img
                className="w-[426px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/frame-3044013@2x.png"
              />
              <img
                className="w-[426px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/frame-3044014@2x.png"
              />
              <img
                className="w-[876px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/frame-3044015@2x.png"
              />
              <img
                className="w-[426px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                alt=""
                src="/frame-3044013-1@2x.png"
              />
              <img
                className="w-[426px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                alt=""
                src="/frame-3044014-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryNavigation.propTypes = {
  className: PropTypes.string,
};

export default GalleryNavigation;
