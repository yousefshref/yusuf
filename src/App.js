import { BiPlay, BiVideoPlus } from "react-icons/bi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="w-full text-sm flex justify-between gap-5 items-center bg-[#222831] py-4 px-3">
        <h1 className="font-bold">Y.S</h1>
        <div className="flex md:gap-10 gap-5 items-center">
          <p>Home</p>
          <p>About me</p>
          <p>Projects</p>
          <p>Contact</p>
          <div>
            <span>
              <CgMenuLeft />
            </span>
          </div>
        </div>
      </div>
      {/* landing */}
      <div className="flex gap-5 relative flex-row h-[100%]">
        <div className="md:hidden justify-center block absolute right-0 left-0 h-full w-full from-[#76ABAE]/35 to-transparent bg-gradient-to-t"></div>
        <div className="img md:w-[48%] w-[100%]">
          <img src="/me.png" />
        </div>
        <div className="md:w-[52%] w-[100%] md:relative absolute h-[100%] flex my-auto flex-col justify-center items-center text-center">
          <div className="flex flex-col h-full items-center justify-center my-auto w-full">
            <div className="flex gap-4 w-[100%] justify-around font-bold items-center">
              <h1 className="md:text-7xl text-5xl w-[50%]">YUSUF</h1>
              <div className="w-[50%] h-[1px] bg-white"></div>
            </div>
            <div>
              <h1 className="md:text-6xl text-5xl font-bold">SHREEF</h1>
            </div>
          </div>
          <div className="text-start p-3 w-full">
            <p className="tracking-widest">SOFTWARE DEVELOPER</p>
          </div>
          <div className="flex p-3 tracking-wider gap-4 w-full justify-start">
            <button className="p-2 px-5 bg-white text-black font-medium">
              Explore Now
            </button>
            <div className="flex items-center gap-2">
              <span>
                <BiPlay />
              </span>
              <p>Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="relative mt-36 flex bg-center bg-cover gap-5 p-5 lg:bg-[#222831] lg:bg-none bg-[url('https://images.pexels.com/photos/2371016/pexels-photo-2371016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed">
        <div className="lg:hidden justify-center block absolute right-0 left-0 h-full w-full from-[#76ABAE]/35 to-[#222831]/30 top-0 bg-gradient-to-t"></div>
        <div className="flex lg:w-[50%] w-[100%] flex-col z-50">
          <div className="flex flex-col font-medium">
            <h3 className="text-3xl">INTRODUCTION</h3>
            <div className="w-[120px] h-[1px] bg-white"></div>
          </div>
          <br />
          <br />
          <div>
            <p className="tracking-wider">
              Before anything, you must know{" "}
              <span className="text-[#76ABAE]">who I am</span>, what I can{" "}
              <span className="text-[#76ABAE]">give you</span>, and{" "}
              <span className="text-[#76ABAE]">
                what my mission is towards you
              </span>
              ... I will explain to you in detail, and you must be careful in
              choosing who will carry out the work for you.
            </p>
          </div>
          <br />
          <br />
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col w-[50%]">
              <strong>About Me</strong>
              <p className="text-xs">
                I am a web developer with experience since approximately 2019. I
                have worked on many projects such as (reservations, electronic
                stores, organizing systems for companies or factories, complex
                scripts, etc.), and this has given me many ideas and experiences
                that I can apply with you in the best way.
              </p>
            </div>
            <div className="flex flex-col w-[50%]">
              <strong>My Mission</strong>
              <p className="text-xs">
                You receive your project in the best and fastest way possible.
                There are no errors and there is no slowness. You will be
                comfortable in your work or your own business... because time is
                money.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] my-auto lg:block hidden">
          <img src="https://images.pexels.com/photos/2371016/pexels-photo-2371016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>

      {/* my work */}
      <div className="flex mt-36 md:flex-row flex-col gap-5 p-4 md:px-10 px-4">
        <div className="md:w-[35%] w-full">
          <div className="relative overflow-hidden rounded-xl bg-violet-300 h-fit flex flex-col justify-center">
            <div className="absolute h-full w-full z-30 from-[#76ABAE]/35 to-[#222831]/30 top-0 right-0 bg-gradient-to-t"></div>
            <img className="rounded-xl" src="/e-commerce.jpg" />
            <div className="absolute top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center">
              <h3 className="md:text-3xl text-xl justify-center font-bold text-white">
                E-commerce Apps
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[65%] w-full gap-3">
          <div className="relative overflow-hidden rounded-xl">
            <img src="/booking.jpg" />
            <div className="absolute h-full w-full z-30 from-red-800/25 to-[#222831]/30 top-0 right-0 bg-gradient-to-t"></div>
            <div className="absolute top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center">
              <h3 className="md:text-3xl text-xl justify-center font-bold text-white">
                Booking Systems-Apps
              </h3>
            </div>
          </div>
          <h2 className="text-2xl tracking-wide font-medium">
            Overview Of My Mission
          </h2>
          <p className="text-sm -mt-2">
            Most of my work was with companies, factories or stores systems, to
            handle their moeny flow, stuffs, etc. Or E-commerce, Booking, Custom
            Service...
          </p>
        </div>
      </div>

      {/* contact */}
      <div className="w-full md:py-0 py-10 mt-36 md:px-10 flex gap-5 px-4 bg-[#222831]">
        <div className="w-[30%] -mt-10 md:block hidden">
          <img src="/me.jpeg" className="rounded-t-xl" />
        </div>
        <div className="flex flex-col md:w-[70%] w-full">
          <div className="flex flex-col gap-2 my-auto">
            <div className="flex flex-wrap gap-3">
              <input
                className="p-1 rounded-md border-none outline-none px-3 text-gray-700"
                placeholder="Your Name..."
              />
              <input
                className="p-1 rounded-md border-none outline-none px-3 text-gray-700"
                placeholder="Your Email..."
              />
            </div>
            <textarea
              className="p-1 rounded-md border-none outline-none px-3 text-gray-700"
              placeholder="What Do You Want To Say..."
            />
            <button className="bg-[#76ABAE] w-fit px-5 transition-all hover:bg-[#222831] hover:border-[#76ABAE] border border-[#222831] text-white p-1 rounded-md">
              Send
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-10 p-3">
            <Link
              to="https://wa.me/201023455435"
              className="flex gap-2 items-center cursor-pointer underline underline-offset-4 transition-all hover:no-underline"
            >
              <span>
                <BsWhatsapp />
              </span>
              <p>01023455435</p>
            </Link>
            <Link
              to="https://www.instagram.com/_yusuf__com/"
              className="flex gap-2 items-center cursor-pointer underline underline-offset-4 transition-all hover:no-underline"
            >
              <span>
                <BsInstagram />
              </span>
              <p>_yusuf__com</p>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100091743741602"
              className="flex gap-2 items-center cursor-pointer underline underline-offset-4 transition-all hover:no-underline"
            >
              <span>
                <FaFacebook />
              </span>
              <p>Yousef Shreef</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
