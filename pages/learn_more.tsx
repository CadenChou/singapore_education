import React from "react";
import Image from "next/image";
import learn_more_pic from "../public/learn_more_pic.jpg";
import Link from "next/link";

export default function learn_more() {
  const stay_informed_sites = [
    "https://www.moe.gov.sg",
    "https://ncee.org/country/singapore/",
    "https://www.gov.sg/features/education",
  ];

  const learn_more_singapore_sites = [
    "https://www.britannica.com/place/Singapore/The-people",
    "https://www.cia.gov/the-world-factbook/countries/singapore/",
    "https://culturalatlas.sbs.com.au/singaporean-culture",
  ];

  return (
    <div className="space-y-7">
      <div className="relative w-full h-[45vh]">
        <Image src={learn_more_pic} alt={""} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-center">
          <span className="bg-gradient-to-r from-gray-100  to-gray-200 text-transparent bg-clip-text">
            Learn More
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-12">
        <div className="flex flex-col items-center space-y-5 text-xl">
          <div className="text-4xl font-semibold ">Stay Informed</div>
          <p className="text-xl max-w-[80vw]">
            To stay updated on the latest advancements and news concerning
            mental health and education in Singapore, explore these additional
            resources:
          </p>
          <div className="flex flex-col items-start w-[80vw]">
            {stay_informed_sites.map((source, idx) => {
              return (
                <Link
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ABAB5] mb-3"
                >
                  {source}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5 text-xl">
          <div className="text-4xl font-semibold">
            Learn More About Singapore
          </div>
          <p className="text-xl max-w-[80vw]">
            To learn more about Singapore and its culture, beyond education and
            mental health, consider checking out the following websites:
          </p>
          <div className="flex flex-col items-start w-[80vw]">
            {learn_more_singapore_sites.map((source, idx) => {
              return (
                <Link
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ABAB5] mb-3"
                >
                  {source}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
