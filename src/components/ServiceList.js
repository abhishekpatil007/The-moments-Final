import React from 'react';
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ServiceList = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center p-6 box-border max-w-full text-center text-5xl text-gray-1000 font-bebas-neue ${className}`}
    >
      <div className="flex flex-wrap justify-between md:flex-row flex-col md:items-start items-center">
        <Button
          className="h-[55px] w-60 mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#36fa74",
            fontSize: "24",
            background: "rgba(255, 255, 255, 0.04)",
            borderRadius: "8px",
            "&:hover": { background: "rgba(255, 255, 255, 0.04)" },
            width: 240,
          }}
        >
          Wedding
        </Button>
        <div className="rounded-lg flex flex-row items-center justify-center py-2.5 px-[42px]">
          <div className="relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
            Family Portraits
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-center py-2.5 px-[88px]">
          <div className="relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
            Events
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-center py-2.5 px-[71px]">
          <div className="relative tracking-[0.06em] leading-[145%] mq450:text-lgi mq450:leading-[28px]">
            Lifestyles
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceList.propTypes = {
  className: PropTypes.string,
};

export default ServiceList;
