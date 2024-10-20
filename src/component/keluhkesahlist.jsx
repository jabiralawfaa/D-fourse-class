// components/KeluhKesahList.jsx
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs, startAfter } from "firebase/firestore";
import { db } from "../firebase";

const KeluhKesahList = () => {
  const [keluhKesahList, setKeluhKesahList] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchKeluhKesah = async (isNextPage = false) => {
    setLoading(true);
    try {
      const keluhKesahRef = collection(db, "feedbacks");
      let q;

      if (isNextPage && lastVisible) {
        q = query(keluhKesahRef, orderBy("createdAt", "desc"), startAfter(lastVisible), limit(5));
      } else {
        q = query(keluhKesahRef, orderBy("createdAt", "desc"), limit(5));
      }

      const querySnapshot = await getDocs(q);
      const keluhKesahData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (!isNextPage) {
        setKeluhKesahList(keluhKesahData);
      } else {
        setKeluhKesahList((prev) => [...prev, ...keluhKesahData]);
      }

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);

      if (querySnapshot.docs.length < 5) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeluhKesah();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6 font-future">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-dfourse">Daftar Keluh Kesah</h2>

      {keluhKesahList.length > 0 ? (
        <div className="flex flex-wrap -mx-4">
          {keluhKesahList.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 font-sans">
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm h-full flex flex-col justify-between">
                <p className="text-sm text-gray-500 mb-2">{new Date(item.createdAt.seconds * 1000).toLocaleString()}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.nama}</h3>
                <p className="text-gray-700 mb-4">{item.keluhKesah}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Belum ada keluh kesah yang ditambahkan.</p>
      )}

      {hasMore && (
        <button onClick={() => fetchKeluhKesah(true)} disabled={loading} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          {loading ? "Memuat..." : "Muat Lebih Banyak"}
        </button>
      )}
    </div>
  );
};

export default KeluhKesahList;
