import React from "react";
import Image from "next/image";
import { GiCrossedRifles } from "react-icons/gi";
import Container from "../shared/Container";
import { useRouter } from "next/navigation";

const Banner1 = () => {
  const router = useRouter();

  return (
    <Container>
      <div
        className="bg-[#f1f5f4] h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 pt-8 pb-0"
        style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
      >
        <Image
          src="/assets/home/banner/model1.png"
          alt="Griffin Arms Rifle"
          height={872}
          width={500}
          className="lg:absolute bottom-0 right-0 order-2 lg:w-[500px] lg:ml-0 md:ml-auto"
        />
        <article className="flex flex-col justify-start items-end order-1 px-8">
          <div className="flex flex-col gap-y-4 max-w-lg z-20 mr-auto">
            <h1 className="md:text-6xl text-4xl font-bold">
              Built for the Hunt.
            </h1>
            <p className="flex flex-row gap-x-1 items-center text-lg text-black">
              Gear up for the season with premium firearms & outdoor essentials
              <GiCrossedRifles className="text-[#457b9d] w-6 h-6 drop-shadow" />
            </p>
            <button
              className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("/products")} // You can update this route later
            >
              Shop Gear
            </button>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner1;

