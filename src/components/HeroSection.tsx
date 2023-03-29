import Image from "next/image";
import { useEffect, useState } from "react";
import mobileBgImage from "../../public/image-web-3-mobile.jpg";
import desktopBgImage from "../../public/image-web-3-desktop.jpg";
import Link from "next/link";

type Props = {};

function HeroSection({}: Props) {
  const [mobile, setMobile] = useState<Boolean>();

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth > 375) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 375) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    });
  });

  return (
    <div className="flex gap-5">
      <div className="grid grid-row-2 w-[70%]">
        <div className="w-full h-72 relative overflow-hidden rounded-md">
          <Image
            src={mobile ? mobileBgImage : desktopBgImage}
            alt="bgImage"
            className="object-cover absolute inset-0 w-full h-full"
          />
        </div>
        <div className="py-4 flex flex-col items-start gap-3 desktop:flex-row">
          <div className="desktop:w-1/2">
            <h1 className="font-extrabold text-4xl desktop:text-6xl">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div className="desktop:w-1/2">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But it
              is really fulfilling its promise?
            </p>
            <button className="w-[180px] tracking-widest bg-primary-400 py-4 mt-4 text-white hover:bg-neutral-800 desktop:mt-6">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-neutral-800 rounded-lg px-3 pt-5">
        <div>
          <h2 className="desktop:text-3xl text-primary-200 font-bold">
            <Link href="/new">New</Link>
          </h2>
        </div>
        {[
          {
            title: "Hydrogen VS Electronic Cars",
            desc: "Will hydrogen-fueled cars ever catch up to EVs?",
          },
          {
            title: "The Downsides of AI Artistry",
            desc: "What are the possible adverse effects of on-demand AI image generation?",
          },
          {
            title: "Is VC Funding Drying Up?",
            desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
          },
        ].map((items) => {
          return (
            <div
              key={items.title}
              className="desktop:py-5 border-b border-neutral-600"
            >
              <h3 className="font-bold text-white desktop:text-lg hover:text-primary-200">
                <Link
                  href={`/article/${items.title
                    .toLocaleLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {items.title}
                </Link>
              </h3>
              <p className="text-neutral-400 desktop:text-sm py-1">
                {items.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
