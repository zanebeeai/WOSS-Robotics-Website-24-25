import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

interface SubteamProps {
    title: string;
    subtitle: string;
    subteams?: string
}

const Subteam = (props: SubteamProps) => {
  return (
    <div className="bg-[#191919] border-2 border-[#2A2A2A] py-5 px-5 rounded-lg hover:border-gray-600 hover:cursor-default">
      <h1 className="font-bold text-md text-white">{props.title}</h1>
      <p className="text-gray-400 text-sm">{props.subtitle}</p>
      {props.subteams && <p className="text-[11px] mt-3 text-gray-400"><span className="uppercase font-bold">Subteams:</span> {props.subteams}</p>}
    </div>
  );
};

interface AboutProps {
  className?: string;
  title: string;
  bg: string;
}

export const AboutCard = (props: AboutProps) => {
  return (
    <div
      className={`${props.className} group hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[275px] px-10 py-24 relative`}
    >
      <div className="relative">
        <h1 className="text-4xl text-white font-bold text-center mb-2 uppercase">
          {props.title}{" "}
        </h1>
      </div>
      <Image
        className="backgroundImage opacity-50 group-hover:opacity-60 absolute inset-0 w-full h-full object-cover"
        src={props.bg}
        alt="Background Image"
        priority={true}
        fill
        quality={20}
      />
    </div>
  );
};

export const RegisterScreen = () => {
  const [hoverText, setHoverText] = useState("Apply here.");
  const [hoverText2, setHoverText2] = useState("Apply here.");

  const handleHover = (num: number) => {
    if (num === 1) {
      setHoverText("Applications open soon!");
    } else {
      setHoverText("Apply here");
    }
  };

  const handleHover2 = (num: number) => {
    if (num === 1) {
      setHoverText2("Applications open soon!");
    } else {
      setHoverText2("Apply here.");
    }
  };

  return (
    <div>
      <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">
        <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
          <span className="text-gray-400">
            Interested in joining <span className="text-primary">VEX 8433?</span>{" "}
            (2024-25)
          </span>
        </h1>

        <div className="space-y-5">
          <div>
            <h2 className="font-bold text-gray-300 text-lg mb-3">Information</h2>
            <p className="text-left text-gray-400">
              → All general members and captains wishing to paricipate <b>MUST</b>{" "}
              pay and register (including signing safety forms), by a due date that will be communicated at the beginning of this school year.
              <br /> <br />→ Registration Fee: <b> ($150)</b>
              <br /> <br />→ All payments for VEX are made via SchoolCash Online or invoice.
            </p>
          </div>

          <h2 className="font-bold text-gray-300 text-lg">Subteams</h2>
          <div className="flex flex-col md:grid grid-cols-3 gap-5">
            <Subteam
              title="🔨 Build"
              subtitle="Constructs the robot's mechanical components while ensuring the robot's structural integrity"
            />

            <Subteam
              title="👨‍💻 Programming"
              subtitle="Codes the robot's movements, sensors, and interactions with the game field and other robots"
            />
            <Subteam
              title="‍🎨 Design & Notebook"
              subtitle="3D Modelling and designing of robot's subsystems and frame"
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-300 text-lg mb-3">Registration</h2>
            <p className="text-left text-gray-400">
              Want to be a member of competitive robotics?{" "}
              <b><a
                href="https://forms.gle/KCrBG39nWmHwF3349"
                className="text-primary hover:text-white"
                target="_blank"
              >
              Apply here.
              </a></b>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">
        <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
          <span className="text-gray-400">
            Don&apos;t want to compete? Try <span className="text-primary">Online Challenges.</span>{" "}
          </span>
        </h1>

        <div className="space-y-5">
          <div>
            <h2 className="font-bold text-gray-300 text-lg mb-3">Information</h2>
            <p className="text-left text-gray-400">
              → All general members and captains wishing to paricipate <b>MUST</b>{" "}
              pay and register (including signing safety forms), by the due date
              that would be determined and informed to you (TBD).
              <br /> <br />→ Registration Fee: <b> ($35)</b>
              <br /> <br />→ All payments for VEX Online Challenges are made via SchoolCash Online or invoice.
            </p>
          </div>

          <h2 className="font-bold text-gray-300 text-lg">Skills Gained</h2>
          <div className="flex flex-col md:grid grid-cols-3 gap-5">
            <Subteam
              title="📓 Notebooking"
              subtitle="Recording and annotating the engineering process of a project over a long period of time."
            />
            <Subteam
              title="🎮 Programming"
              subtitle="The VEX VR and Mathworks Challenges teach valuable skills in mathematical and control coding."
            />

            <Subteam
              title="🔧 Engineering"
              subtitle="All VEX Online Challenges involve some type of engineering, serving as a great introduction to the field."
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-300 text-lg mb-3">Registration</h2>
            <p className="text-left text-gray-400">
              Want to participate in VEX Online Challenges?{" "}
              <b><a
                href="https://forms.gle/KCrBG39nWmHwF3349"
                className="text-primary hover:text-white"
                target="_blank"
              >
              Apply here.
              </a></b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
