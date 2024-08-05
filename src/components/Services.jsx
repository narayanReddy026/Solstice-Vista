import services from "../assets/services.jpg";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <div>
      <hr className="border-t-4 border-white mt-10" />
      <div className="flex flex-col md:flex-row items-center   p-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={services}
            alt="Lady typing on a Computer"
            className="hidden md:block rounded-3xl w-full h-screen object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 m-4 ">
          <div className="bg-pink-300 p-4 rounded-3xl shadow-lg mb-6">
            <h1 className="text-3xl font-semibold text-blue-900">
              Our Offerings...
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              Whether you're a recent graduate or an experienced professional,
              we have the expertise to help you find the right job. Our services
              include resume writing, job search strategies, interview coaching,
              and salary negotiation. We also offer career coaching and training
              programs to help you develop the skills you need to succeed in
              your new role.
            </p>
          </div>
          <div className="bg-pink-300 p-4 rounded-3xl shadow-lg">
            <h1 className="text-3xl font-semibold text-blue-900">
              Connect with Us...
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              So, whether you're looking for a new job or want to take your
              career to the next level, Lone Wolf Technologies is here to help.
              Contact us today to learn more about our services and start your
              journey toward your dream job.
            </p>
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
        </div>
      </div>
    </div>
  );
}
