import musicFile from "./assets/wedding.mp3";
import cowoImg from "./assets/cowo.png";
import ceweImg from "./assets/cewe.png";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import { motion } from "framer-motion";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaGift,
  FaMusic,
  FaRegCalendarAlt,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import foto1 from "./assets/foto1.jpg"
import foto2 from "./assets/foto2.jpg"
import foto3 from "./assets/foto3.jpg"
import foto4 from "./assets/foto4.jpg"
import foto5 from "./assets/foto5.jpg"
import foto6 from "./assets/foto6.jpg"
import foto7 from "./assets/foto7.jpg"

function App() {
const [nama, setNama] = useState("")
const [kehadiran, setKehadiran] = useState("")
const [jumlah, setJumlah] = useState("")
const [ucapan, setUcapan] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault()

  const data = {
    nama,
    kehadiran,
    jumlah,
    ucapan,
  }

  await fetch(
    "https://script.google.com/macros/s/AKfycbw5VTa1GoWSyKklJOP3OAQhyweJM09-fR2EbB5Q1rF1bFPAnzBwPYgp4pFvYxKStc9c/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )

  toast.success("RSVP berhasil dikirim 💌")

  setNama("")
  setKehadiran("")
  setJumlah("")
  setUcapan("")
}

  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to") || "Tamu Undangan";

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  const audioRef = useRef(null);
const shareWhatsApp = (nama) => {

  const url = `${window.location.origin}/?to=${encodeURIComponent(nama)}`

  const message = `Assalamu’alaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${nama}* untuk menghadiri acara pernikahan kami.

Berikut link undangan kami, untuk info lengkap dari acara dapat mengunjungi :

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.

Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.

Terima kasih atas perhatian dan doa restunya.

Wassalamu’alaikum Warahmatullahi Wabarakatuh`

  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`
  )

}
useEffect(() => {

  setTimeout(() => {
    setLoading(false);
  }, 2500);

}, []);

useEffect(() => {

  const targetDate = new Date("2026-06-26T09:00:00").getTime();

  const interval = setInterval(() => {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference > 0) {

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

    }

  }, 1000);



  return () => clearInterval(interval);

}, []);

useEffect(() => {

  if (audioRef.current) {

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

  }

}, [playing]);

useEffect(() => {

  setTimeout(() => {
    setLoading(false);
  }, 2500);

}, []);

useEffect(() => {

  const targetDate = new Date("2026-06-26T09:00:00").getTime();

  const interval = setInterval(() => {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference > 0) {

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

    }

  }, 1000);

  return () => clearInterval(interval);

}, []);
if (loading) {
  return (
    <div className="fixed inset-0 bg-[#111] flex flex-col items-center justify-center z-[999]">

      <div className="w-24 h-24 border-[6px] border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
<p className="text-gray-300 tracking-[6px] uppercase text-sm mb-4">
  Assalamu’alaikum Warahmatullahi Wabarakatuh
</p>
      <h1 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-500 mt-10">
        Meidy & Rais
      </h1>

      <p className="text-gray-400 tracking-[4px] mt-4">
        Wedding Invitation
      </p>

    </div>
  );
}
  return (
    <div className="bg-gradient-to-b from-[#F8F3ED] to-[#EFE6DA] overflow-x-hidden text-[#5B4636] relative w-full max-w-full from-[#F8F3ED] to-[#EFE6DA] overflow-x-hidden text-[#5B4636] relative">
      {/* Sparkle */}
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

  <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>

  <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

  <div className="absolute bottom-40 left-1/3 text-2xl animate-bounce opacity-30">
    🌸
  </div>

  <div className="absolute bottom-20 right-10 text-xl animate-pulse opacity-30">
    ✨
  </div>

</div>
      <Toaster position="top-center" />
<audio
  ref={audioRef}
  src={musicFile}
  loop
/>
      {/* OPENING COVER */}
      {!open && (
        <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200')] bg-cover bg-center scale-110"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1f2b1c]/70"></div>

          {/* Blur Glow */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

          {/* Floral */}
          <div className="absolute bottom-0 left-0 w-48 opacity-70">
            <img
              src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
              alt=""
            />
          </div>

          <div className="absolute top-0 right-0 w-48 opacity-70 rotate-180">
            <img
              src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
              alt=""
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6"
          >
            <p className="uppercase tracking-[6px] text-sm text-gray-200 mb-4">
              The Wedding Of
            </p>

            <h1 className="font-wedding text-3xl sm:text-4xl md:text-5xl sm:text-4xl sm:text-5xl md:text-6xl md:text-9xl text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
              Meidy & Rais
            </h1>
<div className="mb-8">

  <p className="text-gray-300 tracking-[3px]">
    Kepada Yth.
  </p>

  <div className="mt-6 bg-white/10 border border-white/20 backdrop-blur-xl rounded-[25px] px-8 py-5 inline-block shadow-2xl">

  <p className="text-gray-300 tracking-[3px] text-sm">
    Kepada Yth.
  </p>

  <h3 className="text-xl sm:text-2xl text-white font-semibold mt-2 break-words">
    {guest}
  </h3>

</div>

</div>
            <p className="mt-6 text-gray-300 tracking-[4px]">
              26 • 27 JUNI 2026
            </p>

            <button
             onClick={() => {
  setOpen(true);
  setPlaying(true);
}}
              className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-2xl hover:scale-105 transition duration-300"
            >
              Buka Undangan
            </button>
          </motion.div>
        </section>
      )}

      {/* HERO */}
<section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Masjid */}
        
       <div
  className="absolute inset-0 bg-cover bg-center opacity-20 scale-110"
  style={{
    backgroundImage: `url(${foto3})`,
  }}
></div>

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
          className="relative z-10"
        >
          <p className="uppercase tracking-[5px] text-sm text-yellow-700 mb-4">
            The Wedding Of
          </p>

          <h1 className="font-wedding text-4xl sm:text-5xl md:text-6xl lg:text-[120px] text-yellow-700 leading-none">
            Meidy & Rais
          </h1>

          <p className="mt-6 text-lg tracking-[4px] sm:tracking-[10px]">
            27 Juni 2026
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">

            <a
  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Meidy+%26+Rais&dates=20260626T020000Z/20260627T100000Z"
  target="_blank"
  className="px-6 py-3 rounded-full bg-[#314028] text-white shadow-xl flex items-center gap-2"
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

{/* COUNTDOWN */}
<section className="py-24 px-6 relative">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="font-wedding text-4xl text-yellow-700 mb-10">
      Save The Date
    </h2>

    <div className="w-full flex justify-center gap-3 flex-nowrap overflow-x-auto pb-2">

      <div className="bg-white/60 backdrop-blur-xl rounded-[24px] shadow-xl w-[80px] h-[100px] flex flex-col items-center justify-center shrink-0">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-700">{timeLeft.days || 0}</h3>
        <p className="mt-3 tracking-[3px]">Hari</p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-[24px] shadow-xl w-[80px] h-[100px] flex flex-col items-center justify-center shrink-0">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-700">{timeLeft.hours || 0}</h3>
        <p className="mt-3 tracking-[3px]">Jam</p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-[24px] shadow-xl w-[80px] h-[100px] flex flex-col items-center justify-center shrink-0">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-700">{timeLeft.minutes || 0}</h3>
        <p className="mt-3 tracking-[3px]">Menit</p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-[24px] shadow-xl w-[80px] h-[100px] flex flex-col items-center justify-center shrink-0">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-700">{timeLeft.seconds || 0}</h3>
        <p className="mt-3 tracking-[3px]">Detik</p>
      </div>

    </div>

  </div>

</section>
</section>

      {/* QUOTE */}
      <section className="py-24 px-6 relative overflow-hidden">

        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl p-10 text-center">

          <FaHeart className="mx-auto text-yellow-600 text-3xl mb-6" />

          <p className="text-lg leading-loose text-gray-700 italic">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
            menciptakan untukmu pasangan hidup dari jenismu sendiri
            supaya kamu mendapat ketenangan hati dan dijadikan-Nya
            kasih sayang di antara kamu.”
          </p>

          <p className="mt-6 font-semibold text-yellow-700">
            QS. Ar-Rum : 21
          </p>

        </div>
      </section>

      {/* COUPLE */}
      {/* INTRO */}
<section className="py-20 px-6">

  <div className="max-w-3xl mx-auto text-center">

    <p className="text-lg leading-loose text-stone-700">
      Assalamu’alaikum Warahmatullahi Wabarakatuh
    </p>

    <p className="mt-8 text-lg leading-loose text-stone-600">
      Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
      insyaaAllah kami akan menyelenggarakan acara pernikahan :
    </p>

  </div>

</section>
<section

  id="mempelai"
  className="py-24 px-6 relative overflow-hidden"
>
{/* Floral Left Top */}
<div className="absolute top-0 left-0 w-56 opacity-80 pointer-events-none">

  <img
    src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
    className="w-full"
  />

</div>

{/* Floral Right Bottom */}
<div className="absolute bottom-0 right-0 w-64 opacity-80 rotate-180 pointer-events-none">

  <img
    src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
    className="w-full"
  />

</div>

{/* Floral Right Top */}
<div className="absolute top-0 right-0 w-40 opacity-50 rotate-[120deg] pointer-events-none">

  <img
    src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
    className="w-full"
  />

</div>

{/* Floral Left Bottom */}
<div className="absolute bottom-10 left-0 w-44 opacity-50 -rotate-12 pointer-events-none">

  <img
    src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
    className="w-full"
  />

</div>
<div className="text-center mb-14">

  <p className="tracking-[6px] uppercase text-yellow-700 text-sm mb-3">
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
  </p>

  <h2 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-yellow-700">
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
        <div className="flex flex-col gap-12 max-w-xl mx-auto">

          {/* Wanita */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 text-center">

           <div className="relative flex justify-center">

  {/* Glow */}
  <div className="absolute w-72 h-72 rounded-full bg-pink-300/20 blur-3xl"></div>

  {/* Frame Luxury */}
  <div className="relative p-2 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_40px_rgba(212,175,55,0.5)]">

    {/* Inner Border */}
    <div className="p-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30">

      {/* Sparkle */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl text-yellow-200 animate-pulse">
        ☪
      </div>

      <img
        src={ceweImg}
        className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-[6px] border-white shadow-2xl hover:scale-105 transition duration-700"
        alt="Mempelai Wanita"
      />

    </div>

  </div>

</div>

            <h2 className="font-wedding text-2xl sm:text-3xl md:text-5xl whitespace-nowrap text-yellow-700 mt-6">
              Meidy Tamara, S.PD
            </h2>

            <p className="mt-4 text-gray-600">
              Putri dari Mahidin & Nuraida
            </p>

          </div>
<div className="flex items-center justify-center gap-4 py-2">

  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-yellow-600"></div>

  <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-600 text-xl shadow-lg bg-white">
    ☪
  </div>

  <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-yellow-600"></div>

</div>
          {/* Pria */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 text-center">

          <div className="relative flex justify-center animate-[float_5s_ease-in-out_infinite]">

  {/* Glow */}
  <div className="absolute w-72 h-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

  {/* Frame Luxury */}
  <div className="relative p-2 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_40px_rgba(212,175,55,0.5)]">

    {/* Inner Border */}
    <div className="p-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30">

      <img
        src={cowoImg}
        className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-[6px] border-white shadow-2xl hover:scale-105 transition duration-700"
        alt="Mempelai Pria"
      />

    </div>

  </div>

</div>

            <h2 className="font-wedding text-2xl sm:text-3xl md:text-[42px] whitespace-nowrap leading-tight text-yellow-700 mt-6">
              Muhammad Rais, S.H
            </h2>

            <p className="mt-4 text-gray-600">
              Putra dari H. M. Nasir & Hj. Habibah
            </p>

          </div>

        </div>
      </section>



      {/* LOCATION */}
      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <FaMapMarkerAlt className="mx-auto text-4xl text-yellow-700 mb-6" />

          <h2 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-yellow-700 mb-6">
            Lokasi Acara
          </h2>

          <p className="text-lg leading-loose">
            Dusun Pantai Beringin
            <br />
            Desa Alur Cucur
            <br />
            Kec. Rantau
            <br />
            Kab. Aceh Tamiang
          </p>

          <a
            href="https://maps.app.goo.gl/kP8Ehpmrxynur9Ji9"
            target="_blank"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-[#314028] text-white shadow-xl"
          >
            Buka Google Maps
          </a>

        </div>
      </section>



{/* EVENT */}
<section id="acara" className="py-24 px-6">

        <div className="max-w-6xl mx-auto flex flex-col gap-10">

          {/* Akad */}
          <div className="bg-gradient-to-br from-[#FFF8ED] to-[#F5E9D7] rounded-[40px] p-10 shadow-2xl">

            <h3 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-yellow-700 mb-6">
              Akad Nikah
            </h3>

           <div className="grid grid-cols-2 gap-4 gap-8 mt-6 text-left">
  
  <div>
    <p className="text-3xl font-semibold text-stone-700">
      Jumat, 26 Juni 2026
    </p>

    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-600">
      Jam 09.00 WIB - Selesai
    </p>
  </div>

  <div className="leading-8 text-stone-600 text-xl">
    <p>Kantor KUA Rantau</p>
    <p>Desa Alur Cucur</p>
    <p>Kec. Rantau</p>
    <p>Kab. Aceh Tamiang</p>
  </div>

</div>

          </div>

          {/* Resepsi */}
          <div className="bg-gradient-to-br from-[#FFF8ED] to-[#F5E9D7] rounded-[40px] p-10 shadow-2xl">

            <h3 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-yellow-700 mb-6">
              Resepsi
            </h3>

            <div className="grid grid-cols-2 gap-4 gap-8 mt-6 text-left">
  
  <div>
    <p className="text-3xl font-semibold text-stone-700">
      Sabtu, 27 Juni 2026
    </p>

    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-600">
      Jam 10.00 WIB - Selesai
    </p>
  </div>

  <div className="leading-8 text-stone-600 text-xl">
    <p>Dusun Pantai Beringin</p>
    <p>Desa Alur Cucur</p>
    <p>Kec. Rantau</p>
    <p>Kab. Aceh Tamiang</p>
  </div>

</div>
          </div>

        </div>
      </section>


{/* RSVP */}
<section id="rsvp" className="py-24 px-6">

  <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-10">

    <h2 className="font-wedding text-4xl text-yellow-700 text-center mb-10">
      RSVP
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
  type="text"
  placeholder="Nama Lengkap"
  value={nama}
  onChange={(e) => setNama(e.target.value)}
  className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
/>

     <select
  value={kehadiran}
  onChange={(e) => setKehadiran(e.target.value)}
  className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
>
  <option value="">Konfirmasi Kehadiran</option>
  <option value="Hadir">Hadir</option>
  <option value="Tidak Hadir">Tidak Hadir</option>
</select>
      <input
  type="number"
  placeholder="Jumlah Tamu"
  value={jumlah}
  onChange={(e) => setJumlah(e.target.value)}
  className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
/>

     <textarea
  rows="5"
  placeholder="Ucapan & Doa"
  value={ucapan}
  onChange={(e) => setUcapan(e.target.value)}
  className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
></textarea>

      <button
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-2xl"
      >
        Kirim RSVP
      </button>

    </form>

  </div>

</section>
      
{/* GIFT */}
<section id="gift" className="py-24 px-6 relative overflow-hidden">

  {/* Floral */}
  <div className="absolute top-0 left-0 w-48 opacity-60">
    <img
      src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
      className="w-full"
    />
  </div>

<div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">

    <p className="tracking-[6px] uppercase text-yellow-700 text-sm mb-3">
      Wedding Gift
    </p>

    <h2 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-700 mb-6">
      Tanda Kasih
    </h2>

    <div className="flex items-center justify-center gap-4 mb-16">

      <div className="w-16 h-[2px] bg-yellow-600"></div>

      <span className="text-yellow-600 text-2xl">
        ❦
      </span>

      <div className="w-16 h-[2px] bg-yellow-600"></div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* BANK ACEH */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10 border border-white/40">

        <h3 className="text-3xl font-bold text-yellow-700">
          Bank Aceh
        </h3>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl break-all font-semibold text-stone-700">
          50702200043666
        </p>

        <p className="mt-3 text-gray-600 text-lg">
          a.n Meidy Tamara
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText("50702200043666")
            toast.success("Nomor rekening berhasil disalin")
          }}
          className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-xl hover:scale-105 duration-300"
        >
          Salin Rekening
        </button>

      </div>

      {/* BSI */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10 border border-white/40">

        <h3 className="text-3xl font-bold text-yellow-700">
          BSI
        </h3>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl break-all font-semibold text-stone-700">
          7355674139
        </p>

        <p className="mt-3 text-gray-600 text-lg">
          a.n M Rais
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText("7355674139")
            toast.success("Nomor rekening berhasil disalin")
          }}
          className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-xl hover:scale-105 duration-300"
        >
          Salin Rekening
        </button>

      </div>

    </div>

  </div>

</section>

{/* GALLERY */}
<h2 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-700 text-center mb-6">
  Gallery
</h2>
<p className="text-stone-500 text-center mt-2 mb-10 tracking-widest">
  MOMENT OF LOVE
</p>
<Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1.2}
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    768: {
      slidesPerView: 2.2,
    },
  }}
  className="mt-10 px-6"
>

  {[foto1, foto2, foto3, foto4, foto5, foto7].map(
    (foto, index) => (

      <SwiperSlide key={index}>

        <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

          <img
            src={foto}
            className="w-full h-[520px] object-cover hover:scale-110 duration-700"
          />

        </div>

      </SwiperSlide>

    )
  )}

</Swiper>

<section className="py-20 text-center">

  <button
    onClick={() => shareWhatsApp(guest)}
    className="px-10 py-4 rounded-full bg-green-600 text-white shadow-2xl inline-block hover:scale-105 duration-300"
  >
    Share WhatsApp
  </button>

</section>
      {/* BOTTOM NAV */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">

        <div className="bg-[#314028]/80 border border-yellow-500/20 backdrop-blur-xl px-4 py-3 rounded-full flex justify-center gap-3 sm:gap-6 text-sm sm:text-base text-white shadow-2xl overflow-x-auto max-w-[95vw]">

         <button
  onClick={() =>
    document
      .getElementById("home")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Home
</button>

<button
  onClick={() =>
    document
      .getElementById("mempelai")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Mempelai
</button>

<button
  onClick={() =>
    document
      .getElementById("acara")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Acara
</button>

<button
  onClick={() =>
    document
      .getElementById("gift")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Kado
</button>

<button
  onClick={() =>
    document
      .getElementById("rsvp")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  RSVP
</button>

        </div>

      </div>

    </div>
  );
}

export default App;
