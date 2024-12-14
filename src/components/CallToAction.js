import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CallToAction = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-[9px] box-border max-w-full text-left text-lg text-springgreen font-lexend ${className} mt-8`}
    >
      <div className="h-[540px] flex-1 relative rounded-2xl bg-gray-1200 overflow-hidden max-w-full mb-12">
        <img
          className="h-full w-full object-contain"
          alt="Framelg"
          src="/framelg.svg"
        />
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
