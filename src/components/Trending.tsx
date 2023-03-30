import Image from "next/image";
import Link from "next/link";
import image1 from "../../public/image-retro-pcs.jpg";
import image2 from "../../public/image-top-laptops.jpg";
import image3 from "../../public/image-gaming-growth.jpg";

type Props = {};

function Trending({}: Props) {
  return (
    <div className="py-5 grid grid-rows-3 desktop:grid-cols-3 desktop:grid-rows-1">
      {[
        {
          title: "Reviving Retro PCs",
          desc: "What happens when old PCs are given modern upgrades?",
          src: image1,
        },
        {
          title: "Top 10 Laptops of 2022",
          desc: "Our best picks for various needs and budgets.",
          src: image2,
        },
        {
          title: "The Growth of Gaming",
          desc: "How the pandemic has sparked fresh oppurtunities.",
          src: image3,
        },
      ].map((items, i) => {
        return (
          <div
            key={items.title}
            className="py-5 grid grid-cols-3 justify-center items-start"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Link
                href={`/trending/${items.title
                  .toLocaleLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <Image
                  src={items.src}
                  alt={items.title}
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </Link>
            </div>
            <div className="px-3 col-span-2">
              <p className="text-2xl font-bold text-neutral-400 pb-2">
                0{i + 1}
              </p>
              <h3 className="font-bold text-neutral-800 desktop:text-lg hover:text-primary-400">
                <Link
                  href={`/trending/${items.title
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
          </div>
        );
      })}
    </div>
  );
}

export default Trending;
