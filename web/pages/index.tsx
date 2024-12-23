import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { bgImages } from "@/lib/lists/bgImages";

export default function Home() {
  const [bgImageIndex, setBgImageIndex] = useState(
    Math.floor(Math.random() * bgImages.length)
  );
  const [bgImageOpacity, setBgImageOpacity] = useState(0.2);
  const [loaded, setLoaded] = useState(false);
  const [screenLoaded, setScreenLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoaded(true);
    }, 4000);

    const interval = setInterval(() => {
      setBgImageOpacity(0);
      setLoaded(false);
      setTimeout(() => {
        setBgImageIndex(Math.floor(Math.random() * bgImages.length));
        setBgImageOpacity(0.2);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>WOSS Robotics</title>
      </Head>
      <div className="bg-sky-300 bg-opacity-10">
        <div className="relative h-screen">
          {/* Background Image */}
          <Image
            className="backgroundImage absolute inset-0 w-full h-full object-cover"
            src={bgImages[bgImageIndex]}
            alt="Background Image"
            priority={true}
            fill
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? bgImageOpacity : 0,
              transition: "opacity 1s",
            }}
          />
          <div className="flex flex-col min-h-screen z-10">
          {/* Navbar */}
<Navbar className="mb-[10px] md:mb-[15px] overflow-y-hidden" />

{/* Banner Below Navbar */}
<div className="w-full bg-black bg-opacity-10 text-center py-4 mb-[100px] overflow-hidden relative">
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <p className="text-primary text-lg md:text-xl font-bold whitespace-nowrap animate-slide delay-0">
      4th in Ontario
    </p>
    <p className="text-primary text-lg md:text-xl font-bold whitespace-nowrap animate-slide delay-4">
      Top 15 in Canada
    </p>
    <p className="text-primary text-lg md:text-xl font-bold whitespace-nowrap animate-slide delay-8">
      Top 100 in the World
    </p>
  </div>
</div>


<style jsx>
{`
  /* Ensure consistent height for the banner */
  .w-full {
    min-height: 50px; /* Adjust as needed for the banner height */
  }

  /* Keyframe animation for sliding text */
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    50% {
      transform: translateX(0);
      opacity: 1;
    }
    // 60% {
    //   transform: translateX(0);
    //   opacity: 1;
    // }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  /* Animation for phrases */
  .animate-slide {
    position: absolute;
    animation: slideIn 12s linear infinite;
    width: 100%;
    text-align: center;
    opacity: 0; /* Initially invisible */
  }

  /* Staggered animation delays for phrases */
  .animate-slide:nth-child(1) {
    animation-delay: 0s;
  }

  .animate-slide:nth-child(2) {
    animation-delay: 4s;
  }

  .animate-slide:nth-child(3) {
    animation-delay: 8s;
  }
`}
</style>




            {/* Main Content */}
            <div className="flex-grow">
              <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-0">
                {/* Adjust space-y-4 for more or less spacing */}
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <a href="https://www.vexrobotics.com/">
                    <Image
                      className="mx-2" // Adjust margins as needed
                      src="/VRClogo.png"
                      height="100"
                      width="100"
                      alt="VEX Robotics Competition Logo"
                      priority={true}
                    />
                  </a>
                  <p className="font-black text-white text-4xl mx-2 md:text-5xl">x</p>

                  <Link href="/" legacyBehavior>
                    <a>
                      <Image
                        className="logo6070"
                        src="/yellowWildcatsLogo.png"
                        height="50"
                        width="50"
                        alt="Wildcats Logo"
                        priority={true}
                      />
                    </a>
                  </Link>
                </div>

                <div className="text-white font-black text-5xl md:text-8xl text-center px-4">
                  {/* Centered text */}
                  WE ARE{" "}
                  <a
                    href="https://www.robotevents.com/teams/V5RC/8433W"
                    target="_blank"
                  >
                    <span className="text-primary">WILDCATS.</span>
                  </a>
                </div>
                <p className="text-lg md:text-3xl font-medium mt-5 text-gray-400 text-center px-4">
                  {/* Centered text */}
                  A{" "}
                  <a href="https://www.vexrobotics.com/" target="_blank">
                    <span className="italic mr-1">VEX®</span>
                  </a>{" "}
                  Robotics Team
                </p>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
