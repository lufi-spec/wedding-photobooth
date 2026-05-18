import Couple from "./components/Couple";
import OpeningCover from "./components/OpeningCover";
import Events from "./components/Events";
import Quote from "./components/Quote";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Gift from "./components/Gift";
import RSVP from "./components/RSVP";
import Navigation from "./components/Navigation";
import Countdown from "./components/Countdown";
import LoadingScreen from "./components/LoadingScreen";
import MusicPlayer from "./components/MusicPlayer";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react"
import ShareButton from "./components/ShareButton";
import shareWhatsApp from "./utils/shareWhatsApp";
import SparkleBackground from "./components/SparkleBackground";
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
    "https://script.google.com/macros/s/AKfycbz0ECFx3eRcVJSLJh0pS0vOSk7zLqHw2_teJWeAKpIFu91OcQb9zPzEAnJ9XoWtX5nV/exec",
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


useEffect(() => {

  setTimeout(() => {
    setLoading(false);
  }, 3000);

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
  return <LoadingScreen />;
}
  return (
    <div className="bg-gradient-to-b from-[#F8F3ED] to-[#EFE6DA] overflow-x-hidden text-[#5B4636] relative w-full max-w-full from-[#F8F3ED] to-[#EFE6DA] overflow-x-hidden text-[#5B4636] relative">
     <SparkleBackground />
      <Toaster position="top-center" />
      <MusicPlayer playing={playing} />
      <OpeningCover
  open={open}
  setOpen={setOpen}
  setPlaying={setPlaying}
  guest={guest}/>
<Hero
  setPlaying={setPlaying}
  playing={playing}
  toast={toast}/>
<Countdown timeLeft={timeLeft} />
   
 <Quote />
<Couple />
<Location />
<Events />
   <Gallery
  shareWhatsApp={shareWhatsApp}
  guest={guest}
/>   
<RSVP
  handleSubmit={handleSubmit}
  nama={nama}
  setNama={setNama}
  kehadiran={kehadiran}
  setKehadiran={setKehadiran}
  jumlah={jumlah}
  setJumlah={setJumlah}
  ucapan={ucapan}
  setUcapan={setUcapan}
/>
      
<Gift toast={toast} />
    <ShareButton
  shareWhatsApp={shareWhatsApp}
  guest={guest}
/>
<Navigation />
      </div>
      
  );
  
}
export default App;
