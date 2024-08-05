import welcome from "../assets/welcome.jpg";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap  items-center    ">
        <div className=" order-2 md:order-1 flex-wrap px-10 font-poppins  md:px-20 text-base md:text-6xl w-full md:w-1/2">
          <h1 className="font-bold md:text-6xl text-2xl text-blue-500 text-center ">
            Welcome To,
          </h1>{" "}
          <h1 className="font-bold md:text-6xl text-2xl text-blue-600 text-center hover:animate-pulse ">
            Solstice Vista
          </h1>
          <h2 className="font-medium text-center pt-6 max-w-5xl  md:text-xl text-base">
            The job placement company that connects you with top industry
            opportunities. Our mission is to help professionals like you land
            their dream job by offering personalized services and expert
            guidance at every step.
          </h2>
          <div className="flex justify-center place-content-stretch  mt-6">
            <motion.a
              href="tel:+1 656 202 8118"
              className="flex items-center gap-2 p-4 bg-blue-600 text-white rounded-full shadow-lg  text-base font-semibold"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <PhoneIcon className="h-6 w-6 " />
              Call Us Now
            </motion.a>
          </div>
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img
            src={welcome}
            alt="Company Image"
            className="rounded-3xl p-4 md:pr-4 md:pt-3 w-full md:object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black bg-white"
          />
        </div>
        <hr className="border-t border-black mt-10" />
      </div>
    </>
  );
}
