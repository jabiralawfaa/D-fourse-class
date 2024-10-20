// components/FeedbackForm.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const FeedbackForm = () => {
  const [keluhKesah, setKeluhKesah] = useState("");
  const [nama, setNama] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "feedbacks"), {
        keluhKesah,
        nama,
        createdAt: new Date(),
      });
      alert("Keluh kesah berhasil dikirim!");
      setKeluhKesah("");
      setNama("");
    } catch (error) {
      console.error("Error menambahkan dokumen: ", error);
      alert("Terjadi kesalahan, silahkan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-6 font-future pt-20" id="feedback">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-dfourse">Keluh Kesah TRPL D</h2>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Nama (boleh Anonymous)</label>
        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" placeholder="Masukkan nama Anda" required />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Keluh Kesah</label>
        <textarea
          value={keluhKesah}
          onChange={(e) => setKeluhKesah(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          rows="5"
          placeholder="Tuliskan keluh kesah Anda"
          required
        ></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
        {loading ? "Mengirim..." : "Kirim Keluh Kesah"}
      </button>
    </form>
  );
};

export default FeedbackForm;
