import Layout from "../Layout";
import { MdVerified } from "react-icons/md";
const Home = () => {
  return (
    <div>
      <Layout>
        <div className="grid md:grid-cols-4 grid-cols-1  gap-5 overflow-hidden">
          {Array(12)
            .fill(0)
            .map((item, index) => (
              <div key={index} className=" flex-col gap-y-4 flex">
                <img src={`/img/0.jpeg`} alt="" className="rounded-lg" />
                <div className="flex gap-x-3 ">
                  <img
                    src="https://yt3.ggpht.com/yti/AHyvSCD4Yo9gsCNkgjZvpMl2jN5_J7fokKx08gm29hJJ1Q=s88-c-k-c0x00ffffff-no-rj-mo"
                    className="rounded-full w-10 h-10"
                    alt=""
                  />
                  <div>
                    <h1 className="font-semibold text-sm mb-3">
                      World of IB 71 | Vidyut Jammwal | Sankalp Reddy | Anupam
                      Kher
                    </h1>
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs text-slate-500 mb-1">T-Series</p>
                      <span>
                        <MdVerified size={16} />
                      </span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <p className="text-xs text-slate-500">4585k views</p>
                      <p className="text-xs  text-slate-500">1 days</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
