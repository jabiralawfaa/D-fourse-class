const Beranda = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-jumbotron bg-cover bg-center bg-blur bg-grayscale">
      <div className="relative group">
        {" "}
        {/* Tambahkan div pembungkus dengan class 'group' */}
        <h1 className="font-dfourse text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white shadow-lg relative z-10 transition-all duration-300 ease-in-out group-hover:text-stroke group-hover:text-black">
          d<span className="font-semibold font-sans">-</span>fourse
        </h1>
        {/* Kotak hitam yang bergeser dengan ketebalan lebih besar */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[140%] bg-black rounded-md transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 group-hover:right-0 group-hover:translate-x-0"></div>
      </div>

      <h2 className="font-future text-3xl sm:text-lg md:text-xl pt-3 sm:pt-4 md:pt-5 text-white shadow-md">Class</h2>
    </section>
  );
};

export default Beranda;
