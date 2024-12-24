import React, { useState, useMemo } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const frameDivStyle = useMemo(() => ({
    flex: frameButtonFlex,
  }), [frameButtonFlex]);

  const homeStyle = useMemo(() => ({
    color: propColor,
    fontWeight: propFontWeight,
  }), [propColor, propFontWeight]);

  const frameDiv1Style = useMemo(() => ({
    flex: propFlex,
  }), [propFlex]);

  const galleryStyle = useMemo(() => ({
    color: propColor1,
    minWidth: propMinWidth,
    fontWeight: propFontWeight1,
  }), [propColor1, propMinWidth, propFontWeight1]);

  const aboutUsStyle = useMemo(() => ({
    color: propColor2,
    fontWeight: propFontWeight2,
  }), [propColor2, propFontWeight2]);

  const toggleDrawer = (open) => () => {
    setIsMenuOpen(open);
  };

  return (
    <header
      className={`self-stretch h-20 rounded-980xl border-gray-800 border-[1px] border-solid box-border flex flex-col items-start justify-start py-0.5 px-[3px] top-[0] z-[99] sticky text-center text-lg text-white font-lexend ${className}`}
    >
      <div className="self-stretch h-[72px] [backdrop-filter:blur(6px)] rounded-980xl flex flex-col items-center justify-center p-2 box-border">
        <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center justify-start py-0 pl-[22px] pr-0 gap-[7.5px]">
            <div className="rounded-lg [background:linear-gradient(90deg,_#98fa74,_#00f674)] flex flex-row items-center justify-center py-[9px] px-3 box-border w-10 h-10">
              <img className="h-[22px] w-4 relative" loading="lazy" alt="" src="/p.svg" />
            </div>
            <b className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[117px]">The Moments</b>
          </div>

          {/* Burger Menu Icon */}
          <IconButton
            className="mq750:block hidden" // Show only on mobile view
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation Links */}
          <nav className="m-0 flex flex-row items-center justify-start text-center text-lg text-gray-1300 font-lexend mq750:hidden">
            <Link
              to="/"
              className={`flex-[0.7297] flex flex-row items-center justify-center py-1 px-[17px] text-white`}
              style={{ ...frameDivStyle, textDecoration: 'none', color: 'inherit' }}
            >
              <b className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[53px]" style={homeStyle}>
                Home
              </b>
            </Link>
            <Link
              to="/gallery"
              className={`flex-[0.8108] flex flex-row items-center justify-center py-1 px-3.5`}
              style={{ ...frameDiv1Style, textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[59px]" style={galleryStyle}>
                Gallery
              </div>
            </Link>
            <Link
              to="/about-us"
              className={`flex-1 flex flex-row items-center justify-center py-1 px-[7px]`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[74px]" style={aboutUsStyle}>
                About us
              </div>
            </Link>
            <Link
              to="/services"
              className={`flex-1 flex flex-row items-center justify-center py-1 px-[7px]`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[74px]">
                Services
              </div>
            </Link>
            <Link
              to="/contact-us"
              className={`flex-1 flex flex-row items-center justify-center py-1 px-[7px]`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex-1 relative tracking-[-0.75px] leading-[145%] inline-block min-w-[74px]">
                Contact Us
              </div>
            </Link>
          </nav>

          {/* Book a Call Button in Desktop View */}
          <Button
            className="self-stretch w-[180px] mq750:hidden" // Show only on desktop view
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
          >
            {`Book a call `}
          </Button>
        </div>
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark and transparent background
            color: 'white', // Text color for items
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/gallery" onClick={toggleDrawer(false)}>
            <ListItemText primary="Gallery" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/about-us" onClick={toggleDrawer(false)}>
            <ListItemText primary="About Us" style={{ color: 'white' }} />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
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
