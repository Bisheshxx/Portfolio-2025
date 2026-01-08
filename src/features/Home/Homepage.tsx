import Stack from ".";
import InterActiveComponent from "./Components/InterActiveComponent";
import IconsWithTooltips from "./Components/IconsWithTooltips";
import Wave from "@/shared/components/Framer-components/Wave";

export default function Homepage() {
  return (
    <section className="mx-6 md:mx-0" id="home">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 grid-">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between gap-2 bg-center md:text-left">
          <div className="w-full flex justify-center items-center gap-2 mt-14">
            <h1 className="font-bold text-lg md:text-5xl md:w-full font-man-rope flex gap-2 tracking-tighter">
              Yo, Bishesh here.
              <Wave>👋</Wave>
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-center md:text-left text-sm md:text-lg tracking-tighter">
              28 y.o. software developer from Nepal 🇳🇵
            </div>
            <div className="text-center md:text-left text-sm md:text-lg tracking-tighter">
              I build modern web applications and love solving real-world
              problems.
            </div>
          </div>
          <IconsWithTooltips />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-[300px] object-fit md:h-[250px] md:w-[250px] md:mr-20">
            <Stack />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-10 text-center md:text-left">
        <InterActiveComponent />
      </div>
    </section>
  );
}
