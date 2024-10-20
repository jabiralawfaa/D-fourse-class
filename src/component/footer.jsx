const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6 text-lg font-future">
              <li>
                <a href="#home" className="hover:text-gray-400">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#pengurus" className="hover:text-gray-400">
                  Pengurus
                </a>
              </li>
              <li>
                <a href="#anggota" className="hover:text-gray-400">
                  Mahasiswa
                </a>
              </li>
              <li>
                <a href="#post" className="hover:text-gray-400">
                  Our Post
                </a>
              </li>
            </ul>
          </nav>

          {/* Website Creator Info */}
          <div className="text-center md:text-right">
            <p className="text-lg font-future mb-2">Development by Jabiralawfaa</p>
            <p className="text-sm">&copy; 2024 d-fourse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
