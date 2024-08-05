import about from "../assets/about.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <hr className="border-t-4 border-white mt-10" />
      <div className="text-center pt-8 font-poppins md:text-4xl text-xl font-medium text-blue-900">
        <h1>Let Us Connect you to Your Future Career</h1>
      </div>
      <div className="relative flex flex-col md:flex-row items-center  pt-8">
        <div className="w-full  px-10">
          <img
            src={about}
            alt="Bonding Image"
            className=" hidden md:block rounded-full p-4 w-full md:h-screen md:object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black bg-white"
          />
        </div>

        <div className="absolute top-0 w-full h-full md:items-baseline items-center flex  justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="bg-orange-100 md:bg-opacity-80 rounded-3xl p-2 m-4 md:m-24"
          >
            <p className="font-poppins text-center font-medium text-lg max-w-3xl">
              At Solstice Vista, we understand that finding the right job can be
              a challenging and time-consuming process. That's why we have a
              team of experienced recruiters who specialize in various
              industries, including technology, finance, healthcare, marketing,
              and more. Our recruiters have a vast network of connections with
              top employers across the country, and we work closely with them to
              match you with the best possible job opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
