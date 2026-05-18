import { useEffect, useState } from "react";

function RSVP({
  handleSubmit,
  nama,
  setNama,
  kehadiran,
  setKehadiran,
  jumlah,
  setJumlah,
  ucapan,
  setUcapan,
}) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
  fetch(
    "https://script.google.com/macros/s/AKfycbz0ECFx3eRcVJSLJh0pS0vOSk7zLqHw2_teJWeAKpIFu91OcQb9zPzEAnJ9XoWtX5nV/exec"
  )
    .then((res) => res.json())
    .then((data) => {
      setMessages(data.reverse());
    });
}, []);
  return (
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
<div className="mt-12 space-y-4 max-h-[500px] overflow-y-auto pr-2">

  <h3 className="text-2xl text-center text-[#5C1A1B] font-semibold mb-6">
    Ucapan & Doa
  </h3>

  {messages.map((item, index) => (
    <div
      key={index}
      className="bg-white/70 rounded-2xl p-5 shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-[#5C1A1B]">
          {item.nama}
        </h4>

        <span className="text-sm text-gray-500">
          {item.kehadiran}
        </span>
      </div>

      <p className="text-gray-700">
        {item.ucapan}
      </p>
    </div>
  ))}

</div>
      </div>

    </section>
  );
}

export default RSVP;