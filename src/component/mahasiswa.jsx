import { useState } from "react";

const Mahasiswa = () => {
  const daftarMahasiswa = [
    { no: 1, nama: "Heri Herlambang", instagram: "https://www.instagram.com/ff_jagua28/" },
    { no: 2, nama: "Mohammad Jevon Attailah", instagram: "https://www.instagram.com/mjvnaaa/" },
    { no: 3, nama: "Muhammad Rendra Irawan", instagram: "https://www.instagram.com/rendrairwn_/" },
    { no: 4, nama: "Cheryl Aurellya Bangun Jaya", instagram: "https://www.instagram.com/chrylaurlly_/" },
    { no: 5, nama: "Husnul Alisah", instagram: "https://www.instagram.com/hsnalss_/" },
    { no: 6, nama: "Virdan Andi Wardana", instagram: "https://www.instagram.com/vrdnaw_/" },
    { no: 7, nama: "Mohammad Nuris Gustian Arrafi", instagram: "https://www.instagram.com/biggfoot47/" },
    { no: 8, nama: "Salam Rizqi Mulia", instagram: "https://www.instagram.com/salambae_/" },
    { no: 9, nama: "Febriyan Putra Hariyadi", instagram: "https://www.instagram.com/febriyanputrah/" },
    { no: 10, nama: "Dino Febiyan", instagram: "https://www.instagram.com/dnfbyan_/" },
    { no: 11, nama: "Rusydi Jabir Al-awfa", instagram: "https://www.instagram.com/jabiralawfaa/" },
    { no: 12, nama: "Rizky Bintang Putra", instagram: "https://www.instagram.com/rzkybntangptra/" },
    { no: 13, nama: "Muhammad Rakha Widya Ardhana", instagram: "https://www.instagram.com/rkhawdyardhn/" },
    { no: 14, nama: "Alfin Nazatil Kirom", instagram: "https://www.instagram.com/alfinhmn/" },
    { no: 15, nama: "Dian Restu Khoirunnisa", instagram: "https://www.instagram.com/_dnrstu/" },
    { no: 16, nama: "Vina Faizatus sofita", instagram: "https://www.instagram.com/viinafai_/" },
    { no: 17, nama: "Achmad Fahmi Fuady", instagram: "https://www.instagram.com/fahmifuady9/" },
    { no: 18, nama: "Daniel Fandino", instagram: "https://www.instagram.com/dnielfandn/" },
    { no: 19, nama: "Danish Naisyila Azka", instagram: "https://www.instagram.com/dnishnaisyila/" },
    { no: 20, nama: "Intan Rahma safira", instagram: "https://www.instagram.com/intan_rhmsfr/" },
    { no: 21, nama: "Nadhifah Afiyah Qurota'ain", instagram: "https://www.instagram.com/nadhifah_afiyah/" },
    { no: 22, nama: "Firman Ardiansyah", instagram: "https://www.instagram.com/frmnnardnsyh_/" },
    { no: 23, nama: "Nicko Sugiharto", instagram: "https://www.instagram.com/nickosugiarto_/" },
    { no: 24, nama: "Yushril Huda Ramadhany Sugianto", instagram: "https://www.instagram.com/yushril_sugianto/" },
    { no: 25, nama: "Adelia Fioren Zety", instagram: "https://www.instagram.com/flrn.zt/" },
    { no: 26, nama: "Leni Ayu Pratiwi", instagram: "https://www.instagram.com/lenapr___/" },
    { no: 27, nama: "Tio Krisna Mukti", instagram: "https://www.instagram.com/tio.krysh/" },
    { no: 28, nama: "Anisa Suci Rahmawati", instagram: "https://www.instagram.com/anisaucira/" },
    { no: 29, nama: "Ahmad Maulidin", instagram: "#" },
    { no: 30, nama: "Achmad Alfarizy Satriya Gautama", instagram: "https://www.instagram.com/alfarizyes/" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMahasiswa = daftarMahasiswa.filter((mahasiswa) => mahasiswa.nama.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="py-10 px-4 bg-gray-100 pt-20" id="anggota">
      <h2 className="text-3xl font-dfourse text-center text-black mb-8">Daftar Nama Mahasiswa TRPL D</h2>

      {/* Input pencarian */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Cari mahasiswa..."
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabel Mahasiswa */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-black text-white text-left">No</th>
              <th className="py-2 px-4 bg-black text-white text-left">Nama Mahasiswa</th>
              <th className="py-2 px-4 bg-black text-white text-left">Instagram</th>
            </tr>
          </thead>
          <tbody>
            {filteredMahasiswa.map((mahasiswa, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4">{mahasiswa.no}</td>
                <td className="py-2 px-4">{mahasiswa.nama}</td>
                <td className="py-2 px-4">
                  <a href={mahasiswa.instagram} className="relative text-blue-500 font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500">
                    Kunjungi
                    {/* Garis bawah animasi */}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 transition-all duration-300 ease-in-out hover:w-full"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Mahasiswa;
