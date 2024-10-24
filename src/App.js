import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top when navigation action is not "POP" (user clicks link or uses history)
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update title and meta description based on current route
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Homepage - The Moments";
        metaDescription = "Welcome to The Moments Homepage.";
        break;
      case "/gallery":
        title = "Gallery - The Moments";
        metaDescription = "Browse through our gallery of beautiful moments.";
        break;
      case "/about-us":
        title = "About Us - The Moments";
        metaDescription = "Learn more about The Moments and our story.";
        break;
      default:
        title = "The Moments";
        metaDescription = "Welcome to The Moments website.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
