import { motion } from "framer-motion";
import { FaMusic, FaRegCalendarAlt } from "react-icons/fa";

import floralLeft from "../assets/left.png";
import floralRight from "../assets/right.png";
import foto3 from "../assets/foto3.jpg";

function Hero({ setPlaying, playing, toast }) {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >

        {/* Background */}
        <div
  className="absolute inset-0 bg-cover bg-center opacity-10"
  style={{
    backgroundImage: `url(${foto3})`,
  }}
></div>

        {/* Floral Left */}
        <img
          src={floralLeft}
          className="absolute left-0 top-0 w-56 sm:w-72 opacity-40 pointer-events-none"
          alt=""
        />

        {/* Floral Right */}
        <img
          src={floralRight}
          className="absolute right-0 top-0 w-56 sm:w-72 opacity-40 pointer-events-none"
          alt=""
        />

<img
  src={floralLeft}
  className="absolute left-0 top-0 w-40 opacity-80"
/>

<img
  src={floralRight}
  className="absolute right-0 bottom-0 w-40 opacity-80"
/>
<div className="flex flex-col items-center mb-6">

  <h1
    className="text-5xl sm:text-6xl text-[#5C1A1B] leading-none"
    style={{
      fontFamily: "Amiri",
      direction: "rtl",
    }}
  >
    وَلِيمَةُ العُرْسِ
  </h1>

  <div className="w-24 h-[1px] bg-yellow-700 my-4 opacity-60"></div>

  <p className="text-gray-500 tracking-[4px] uppercase text-xs">
    Walimatul ‘Urs
  </p>

</div>
        {/* Floral */}
        <div className="absolute left-0 bottom-0 w-64 opacity-70">
          <img
            src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
            alt=""
          />
        </div>

        <div className="absolute right-0 top-0 w-64 opacity-70 rotate-180">
          <img
            src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
            alt=""
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-md mx-auto"
        >

          <h1 className="font-wedding text-4xl sm:text-5xl md:text-6xl lg:text-[120px] text-[#5C1A1B] leading-none">
            Meidy & Rais
          </h1>

          <p className="mt-6 text-lg tracking-[4px] sm:tracking-[10px]">
            27 Juni 2026
          </p>
<div className="mt-10">
  <p
    className="text-4xl text-[#5C1A1B]"
    style={{ fontFamily: "Amiri" }}
  >
    وَخَلَقْنَكُمْ أَزْوَاجًا
  </p>

  <p className="text-gray-500 mt-3 text-sm">
    "Dan Kami jadikan kamu berpasang-pasangan"
  </p>
</div>
          <div className="mt-10 flex items-center justify-center gap-4">

            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Meidy+%26+Rais&dates=20260626T020000Z/20260627T100000Z"
              target="_blank"
              className="px-6 py-3 rounded-full bg-[#5C1A1B] text-white shadow-xl flex items-center gap-2"
            >
              <FaRegCalendarAlt />
              Save Date
            </a>

            <button
              onClick={() => {
                setPlaying(!playing);

                if (!playing) {
                  toast.success("Music Playing");
                } else {
                  toast.error("Music Paused");
                }
              }}
              className="px-6 py-3 rounded-full border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white transition"
            >
              <FaMusic />
            </button>

          </div>
        </motion.div>

      </section>

      <section className="py-20 flex justify-center">

        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent relative">

          <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-yellow-700 text-4xl">
            ☪
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;