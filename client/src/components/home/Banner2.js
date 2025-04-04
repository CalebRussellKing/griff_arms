import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner2 = ({ className }) => {
  const router = useRouter();

  return (
    <section className="mt-20">
      <Container className={className ? className : ""}>
        <div
          className="bg-[#e9f5f2] h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
          style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
        >
          <Image
            src="/assets/home/banner/kid.png" // TODO: Replace with a hunting-related promo image
            alt="Featured Gear"
            height={872}
            width={600}
            className="lg:absolute bottom-0 left-0 order-2"
          />
          <article className="flex flex-col justify-start items-end order-1">
            <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:ml-auto lg:mr-0 mr-auto">
              <h1 className="md:text-6xl text-4xl font-bold">
                Limited-Time Hunting Gear Deals
              </h1>
              <p className="text-lg text-slate-600">
                Outfit your next hunt with premium tools at unbeatable prices. Offers valid while supplies last.
              </p>
              <button
                className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
                onClick={() => router.push("/deals")} // Update route when ready
              >
                Explore Deals
              </button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner2;
