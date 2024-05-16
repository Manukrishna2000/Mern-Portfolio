import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { scrollYProgress } = useViewportScroll();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);

  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / document.body.scrollHeight;
      console.log(scrollPercentage);
      if (!showWelcome && scrollPercentage > 0.5) {
        setShowWelcome(true);
        if (showWelcome && scrollPercentage < 0.6) {
          setShowWelcome(false);}
      } else if (!showWelcome && scrollPercentage > 0.6) { // Adjust as needed
        setShowNewContent(true);
        setShowWelcome(false);

      }
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showWelcome, showNewContent]);

  return (
    <div className="wrapper">
      <motion.div
        className=""
        style={{
          scaleY,
          opacity
        }}
      >
        <div className="text-[30px]">Haii....</div>
      </motion.div>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[30px] welcome"
          >
            Welcome
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showNewContent && (
          <motion.div
            key="newContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[30px] new-content"
          >
            New Content
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
