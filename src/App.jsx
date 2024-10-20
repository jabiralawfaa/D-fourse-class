import "./App.css";
import Navbar from "./component/navbar";
import Beranda from "./component/beranda";
import Pengurus from "./component/Pengurus";
import Mahasiswa from "./component/mahasiswa";
import Post from "./component/post";
import Footer from "./component/footer";
import FeedbackForm from "./component/keluhkesahform";
import KeluhKesahList from "./component/keluhkesahlist";

function App() {
  return (
    <div className="scroll-smooth transition-all duration-300">
      <Navbar />
      <Beranda id="home" />
      <Pengurus id="pengurus" />
      <Mahasiswa id="anggota" />
      <Post id="post" />
      <FeedbackForm id="feedback" />
      <KeluhKesahList />
      <Footer />
    </div>
  );
}

export default App;
