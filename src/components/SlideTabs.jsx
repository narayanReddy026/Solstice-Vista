import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
export default function SlideTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div>
        <ul
          onMouseLeave={() => {
            setPosition((prev) => ({
              ...prev,
              opacity: 0,
            }));
          }}
          className="relative  md:flex md:justify-center mx-auto w-fit hidden  font-poppins font-semibold rounded-full border-2 border-black bg-white p-1"
        >
          <Tab setPosition={setPosition}>Why Choose Us</Tab>
          <Tab setPosition={setPosition}>Our Services</Tab>
          <Tab setPosition={setPosition}>Clients</Tab>
          <Tab setPosition={setPosition}>Contact Us</Tab>
          <Cursor position={position} />
        </ul>
      </div>
      <div className="md:hidden">
        <button
          // className="bg-black text-white p-2"
          onClick={handleMobileMenuToggle}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-black text-white pt-24 pl-4 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-40`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={handleMobileMenuToggle}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div>
            <Tab setPosition={setPosition}>Why Choose Us</Tab>
            <Tab setPosition={setPosition}>Our Services</Tab>
            <Tab setPosition={setPosition}>Clients</Tab>
            <Tab setPosition={setPosition}>Contact Us</Tab>
            <Cursor position={position} />
          </div>
        </ul>
      </div>
    </>
  );
}

function Tab({ children, setPosition }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
}

function Cursor({ position }) {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
    />
  );
}
