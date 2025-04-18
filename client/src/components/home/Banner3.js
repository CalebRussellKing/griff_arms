import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner3 = ({ className }) => {
  const router = useRouter();

  return (
    <Container className={className ? className : ""}>
      <div
        className="bg-[#f4f4f4] h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
        style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
      >
        <Image
          src="/assets/home/banner/earn.png" // TODO: Replace with loyalty/rewards or hunting lifestyle image
          alt="Griffin Loyalty Club"
          height={872}
          width={600}
          className="lg:absolute bottom-0 right-0 order-2"
        />
        <article className="flex flex-col justify-start items-end order-1">
          <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:mr-auto lg:mr-0 mr-auto">
            <h1 className="md:text-6xl text-4xl font-bold">
              Join the Griffin Loyalty Club
            </h1>
            <p className="text-lg text-slate-600">
              Get rewarded with exclusive gear drops, free shipping, and early access to seasonal sales.
            </p>
            <button
              className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("/rewards")} // Placeholder route for a rewards page
            >
              Learn More
            </button>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default Banner3;
