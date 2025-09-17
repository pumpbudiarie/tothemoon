import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About Budi
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(Budi Arie Setiadi)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">Budi Arie Setiadi</span>, a former
                Indonesian minister and the chairman of{" "}
                <span className="font-semibold italic">{'"Projo (a volunteer organization supporting Joko Widodo)"'}</span>{" "}
                , has been
                the subject of an online gambling scandal.{" "}
              </p>
              <p className="indent-12 mt-3">
                He was questioned by police investigators regarding his previous role
                as Minister of Communications and Informatics
                in relation to an {" "}
                <span className=" italic font-bold">illegal gambling probe</span>.
              </p>
              <p className="indent-12 mt-3">
                Budi Arie has denied personal involvement and stated
                his willingness to cooperate with the
                investigation.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            Unfortunately 🥹, <span className="text-3xl font-bold">Budi</span>{" "}
            will soon be arrested by the{" "}
            <span className="italic font-semibold">Corruption Eradication Committee</span>,
            and sent to prison after $BUDI goes to the moon.
          </p>
          <p className="text-4xl p-10">
            But now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              Budi
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
