import PengurusIMG from "./images/pengurus_img";

const Pengurus = () => {
  return (
    <section className="py-10 px-4 bg-dark pt-20" id="pengurus">
      <h2 className="text-3xl font-dfourse text-center text-white mb-8">Pengurus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title 1 */}
        <div className="flex flex-col items-center">
          <div className="relative mb-2 group">
            {" "}
            {/* Tambahkan class 'group' */}
            <img
              src={PengurusIMG.korlasBG}
              alt="Pengurus 1"
              className="rounded-lg w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90" // Mengecil saat hover
            />
            <img
              src={PengurusIMG.korlas}
              alt="Custom 1"
              className="absolute bottom-0 left-0 w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" // Membesar saat hover
            />
          </div>
          <h3 className="font-bold text-white text-xl font-dfourse pt-10">Koordinator Kelas</h3>
          <p className="text-white text-lg font-medium font-future">Dino febiyan</p>
        </div>

        {/* Title 2 */}
        <div className="flex flex-col items-center">
          <div className="relative mb-2 group">
            <img src={PengurusIMG.wakorlasBG} alt="Pengurus 2" className="rounded-lg w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90" />
            <img src={PengurusIMG.wakorlas} alt="Custom 2" className="absolute bottom-0 left-0 w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>
          <h3 className="font-bold text-white text-xl font-dfourse pt-10">Wakil Koordinator</h3>
          <p className="text-white text-lg font-medium font-future">Nadhifah Afiyah Q</p>
        </div>

        {/* Title 3 */}
        <div className="flex flex-col items-center">
          <div className="relative mb-2 group">
            <img src={PengurusIMG.sekretarisBG} alt="Pengurus 3" className="rounded-lg w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90" />
            <img src={PengurusIMG.sekretaris} alt="Custom 3" className="absolute bottom-0 left-0 w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>
          <h3 className="font-bold text-white text-xl font-dfourse pt-10">Sekretaris</h3>
          <p className="text-white text-lg font-medium font-future">Cheryl Aurellya B.J</p>
          <p className="text-white text-lg font-medium font-future">Adelia fioren Zety</p>
        </div>

        {/* Title 4 */}
        <div className="flex flex-col items-center">
          <div className="relative mb-2 group">
            <img src={PengurusIMG.bendaharaBG} alt="Pengurus 4" className="rounded-lg w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90" />
            <img src={PengurusIMG.bendahara} alt="Custom 4" className="absolute bottom-0 left-0 w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>
          <h3 className="font-bold text-white text-xl font-dfourse pt-10">Bendahara</h3>
          <p className="text-white text-lg font-medium font-future">Rizky Bintang Putra</p>
          <p className="text-white text-lg font-medium font-future">Moh. Jevon Attailah</p>
        </div>
      </div>
    </section>
  );
};

export default Pengurus;
