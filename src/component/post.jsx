import { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    // Adding Juicer embed script to the document
    const script = document.createElement("script");
    script.src = "https://www.juicer.io/embed/d_fourse/embed-code.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-10 px-4 bg-blue-950 pt-20" id="post">
      <h2 className="text-3xl font-dfourse text-center text-white mb-8">Our Post</h2>
      <div className="max-w-6xl mx-auto">
        {/* Juicer.io embed area */}
        <div className="juicer-feed" data-feed-id="d_fourse">
          <noscript>
            <a href="https://www.juicer.io">Powered by Juicer</a>
          </noscript>
        </div>
      </div>
    </section>
  );
};

export default Post;
