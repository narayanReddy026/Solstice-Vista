import SlideTabs from "./SlideTabs";

export default function Header() {
  return (
    <div className=" flex  align-items md:justify-around justify-between items-center p-4">
      <div className=" flex font-Alegreya font-semibold items-center   left-0 top-0 gap-4 px-8 ">
        <img
          src="logo.jpeg"
          alt="logo"
          className="h-9 w-9 rounded-full cursor-pointer"
        />
        <h1 className="cursor-pointer text-2xl">Solstice Vista</h1>
      </div>
      <div>
        <SlideTabs />
      </div>
    </div>
  );
}
