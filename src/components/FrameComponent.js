import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FrameComponent = ({
  className = "",
  frameButtonFlex,
  propColor,
  propFontWeight,
  propFlex,
  propColor1,
  propMinWidth,
  propFontWeight1,
  propColor2,
  propFontWeight2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: frameButtonFlex,
    };
  }, [frameButtonFlex]);

  const homeStyle = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const galleryStyle = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth,
      fontWeight: propFontWeight1,
    };
  }, [propColor1, propMinWidth, propFontWeight1]);

  const aboutUsStyle = useMemo(() => {
    return {
      color: propColor2,
      fontWeight: propFontWeight2,
    };
  }, [propColor2, propFontWeight2]);

  return (
    <header
      className={`self-stretch h-20 rounded-980xl border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-0.5 px-[3px] top-[0] z-[99] sticky text-center text-lg text-white font-lexend ${className}`}
    >
      <div className="self-stretch h-[72px] [backdrop-filter:blur(6px)] rounded-980xl bg-gray-1200 flex flex-col items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-start py-0 pl-[22px] pr-0 gap-[7.5px]">
            <div className="rounded-lg [background:linear-gradient(90deg,_#98fa74,_#00f674)] flex flex-row items-center justify-center py-[9px] px-3 box-border w-10 h-10">
              <img
                className="h-[22px] w-4 relative"
                loading="lazy"
                alt=""
                src="/p.svg"
              />
            </div>
            <b className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[117px]">
              The Moments
            </b>
          </div>
          <nav className="m-0 flex flex-row items-center justify-start text-center text-lg text-gray-1300 font-lexend mq750:hidden">
            <Link to="/" className="flex-[0.7297] flex flex-row items-center justify-center py-1 px-[17px] text-white" style={frameDivStyle}>
              <b className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[53px]" style={homeStyle}>
                Home
              </b>
            </Link>
            <Link to="/gallery" className="flex-[0.8108] flex flex-row items-center justify-center py-1 px-3.5" style={frameDiv1Style}>
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[59px]" style={galleryStyle}>
                Gallery
              </div>
            </Link>
            <Link to="/about" className="flex-1 flex flex-row items-center justify-center py-1 px-[7px]">
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[74px]" style={aboutUsStyle}>
                About us
              </div>
            </Link>
          </nav>
          <Button
            className="self-stretch w-[180px]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              borderColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "999px",
              "&:hover": { borderColor: "rgba(255, 255, 255, 0.3)" },
              width: 180,
            }}
          >{`Book a call `}</Button>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameButtonFlex: PropTypes.any,
  propColor: PropTypes.any,
  propFontWeight: PropTypes.any,
  propFlex: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFontWeight1: PropTypes.any,
  propColor2: PropTypes.any,
  propFontWeight2: PropTypes.any,
};

export default FrameComponent;
