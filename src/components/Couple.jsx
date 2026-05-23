import cowoImg from "../assets/cowo.png";
import ceweImg from "../assets/cewe.png";

function Couple() {
  return (
    <>
 

      {/* MEMPELAI */}
      <section
        id="mempelai"
        className="py-24 px-6 relative overflow-hidden"
      >

        {/* Floral kiri */}
        <div className="absolute top-0 left-0 w-56 opacity-70 pointer-events-none">
          <img
            src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
            className="w-full"
            alt=""
          />
        </div>

        {/* Floral kanan */}
        <div className="absolute bottom-0 right-0 w-56 opacity-70 rotate-180 pointer-events-none">
          <img
            src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
            className="w-full"
            alt=""
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="tracking-[6px] uppercase text-yellow-700 text-sm mb-3">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          <h2 className="font-wedding text-4xl sm:text-5xl text-yellow-700">
            Mempelai
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">

            <div className="w-16 h-[2px] bg-yellow-600"></div>

            <span className="text-yellow-600 text-2xl">
              ❦
            </span>

            <div className="w-16 h-[2px] bg-yellow-600"></div>

          </div>

        </div>

        {/* Content */}
        <div className="flex flex-col gap-14 max-w-2xl mx-auto">

          {/* Wanita */}
          <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-[45px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-white/40 p-8 sm:p-12 text-center">
{/* Ornament */}

<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-yellow-100/40 to-transparent"></div>

<div className="absolute top-6 right-6 text-yellow-200 text-5xl opacity-40">
  ✦
</div>

<div className="absolute bottom-6 left-6 text-pink-200 text-4xl opacity-40">
  ❀
</div>
           <div className="relative flex justify-center mt-2">

              {/* Glow */}
              <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

             {/* Frame */}
<a
  href="https://www.instagram.com/meidytamara?igsh=MXgxMTN6ajF1ZTk5bA=="
  target="_blank"
  rel="noopener noreferrer"
  className="relative p-2 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-105 transition duration-300 cursor-pointer"
>

                <div className="p-2 rounded-full bg-white">

                  <img
                    src={ceweImg}
                    className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full border-[6px] border-white shadow-2xl"
                    alt="Mempelai Wanita"
                  />

                </div>

            </a>

            </div>

        <h2 className="font-luxury text-4xl sm:text-5xl font-semibold text-[#6B4A35] mt-10 leading-tight">
  Meidy Tamara, S.Pd
</h2>

            <p className="mt1 text-gray-600 text-lg">
              Putri ke 5 dari bapak Mahidin dan ibu Nuraida
            </p>
<div className="flex items-center justify-center gap-3 mt-6">

  <div className="w-10 h-[1px] bg-yellow-500"></div>

  <span className="text-yellow-600 text-sm tracking-[4px] uppercase">
    Bride
  </span>

  <div className="w-10 h-[1px] bg-yellow-500"></div>

</div>
          </div>

          {/* Tengah */}
          <div className="flex items-center justify-center gap-4">

            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-yellow-600"></div>

            <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-600 text-xl bg-white shadow-lg">
              ☪
            </div>

            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-yellow-600"></div>

          </div>

          {/* Pria */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl p-8 sm:p-12 text-center">

            <div className="relative flex justify-center">

              {/* Glow */}
              <div className="absolute w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

              {/* Frame */}
<a
  href="https://www.instagram.com/01aiis?igsh=MWQ2dmx0Z3h6enp2dQ=="
  target="_blank"
  rel="noopener noreferrer"
  className="relative p-2 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-105 transition duration-300 cursor-pointer"
>

                <div className="p-2 rounded-full bg-white">

                  <img
                    src={cowoImg}
                    className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full border-[6px] border-white shadow-2xl"
                    alt="Mempelai Pria"
                  />

                </div>

              </a>

            </div>

            <h2 className="font-luxury text-4xl sm:text-5xl font-semibold text-[#6B4A35] mt-10 leading-tight">
  Muhammad Rais, S.H
</h2>

            <p className="mt1 text-stone-500 text-lg tracking-wide">
              putra ke 3 dari bapak h.M Nasir dan ibu hj.habibah
            </p>
<div className="flex items-center justify-center gap-3 mt-6">

  <div className="w-10 h-[1px] bg-yellow-500"></div>

  <span className="text-yellow-600 text-sm tracking-[4px] uppercase">
    Groom
  </span>

  <div className="w-10 h-[1px] bg-yellow-500"></div>

</div>
          </div>

        </div>

      </section>
    </>
  );
}

export default Couple;