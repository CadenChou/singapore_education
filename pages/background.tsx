import React from "react";
import Image from "next/image";
import background from "../public/background.jpg";
import skyline from "../public/homepage.jpg";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../public/slide1.jpg";
import slide2 from "../public/slide2.jpg";
import slide3 from "../public/slide3.jpg";

export default function Background() {
  return (
    <div>
      <div className="relative w-full h-[45vh]">
        <Image src={skyline} alt={""} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-center">
          <span className="bg-gradient-to-r from-gray-600  to-gray-800 text-transparent bg-clip-text">
            Background{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510562.3141560374!2d103.51457702624404!3d1.3146649405245587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sus!4v1701394148541!5m2!1sen!2sus"
          loading="lazy"
          className="mt-8 ml-8 w-[45vw] h-96"
        />
        <div className="mt-8 mr-8 w-[45vw] space-y-6 text-lg">
          <div>
            <span className="font-bold">Capital:</span> Singapore
          </div>
          <div>
            <span className="font-bold">Population:</span> Roughly 6 million (as
            of 2023)
          </div>
          <div>
            <span className="font-bold">Official Languages:</span> English,
            Malay, Mandarin Chinese, and Tamil
          </div>
          <div>
            <span className="font-bold">Government:</span> Government of
            Singapore (Sovereign Republic)
          </div>
          <div>
            <span className="font-bold">Prime Minister:</span> Lee Hsien Loong
          </div>
          <div>
            <span className="font-bold">GDP/Capita:</span> $87,880
          </div>
          <div>
            <span className="font-bold">Major Industries:</span> Manufactoring,
            Financial Services
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="mt-8 ml-8 w-[45vw] h-96">
          <Carousel>
            <Carousel.Item>
              <Image src={slide1} alt={""} className="max-h-80" />
              <Carousel.Caption>
                <h3>Haji Lane</h3>
                <p>Kampong Glam neighborhood</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={slide2} alt={""} className="max-h-80" />
              <Carousel.Caption>
                <h3>Supertree Grove</h3>
                <p>Gardens by the Bay</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={slide3} alt={""} className="max-h-80" />
              <Carousel.Caption>
                <h3>HSBC Rain Vortex</h3>
                <p>Jewel Changi Airport</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="mt-8 mr-8 w-[45vw] space-y-6 text-lg">
          <p>
            Singapore, officially known as the Republic of Singapore, is an
            island city-state located in Southeast Asia, bordering the southern
            tip of Malaysia. Its population of nearly six million is
            multi-ethnic and multi-religious, and is one of the wealthiest in
            the world. Singapore has four official languages: English, Malay,
            Mandarin, and Tamil.
          </p>
          <p>
            Singapore's contemporary era began when a British colonial official
            named Stamford Raffles established Singapore as a trading post for
            the British Empire in 1819. In 1963, Singapore declared independence
            from Malaysia and became a part of Malaysia. Today, Singapore is
            known for being an important business and financial hub for
            Southeast Asia and the world. The image carousel features a few
            popular landmarks.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-5xl text-singapore_red space-y-12">
        <div className="flex justify-center">Education in Singapore</div>
        <div className="flex justify-around text-3xl">
          <div className="max-w-[43vw] flex flex-col items-center space-y-4">
            <div>General Information</div>
            <p className="text-lg text-text_white">
              In Singapore, primary education lasts for six years, followed by
              secondary school which lasts four to five years, and finally post
              secondary school which is two to three years long. After secondary
              school, students have multiple postsecondary options including
              Polytechnic schools, the Institute of Technical Education (ITE),
              Junior Colleges, and other specialized institutions.
            </p>
          </div>
          <div className="max-w-[43vw] flex flex-col items-center space-y-4">
            <div>Assessments</div>
            <p className="text-lg text-text_white">
              Unlike most public high schools in the US, admission into
              secondary schools is dependent on one’s performance on the Primary
              School Leaving Examination (PSLE). The PSLE also determines which
              stream/track students can join: Express, Normal (Academic), or
              Normal (Technical). In Secondary school, students take
              subject-based O-level, N-level, and A-level exams depending on
              their track and year of study.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[70vw] flex flex-col items-center space-y-4 justify-center">
            <div className="text-3xl">Why study Singapore?</div>
            <p className="text-lg text-text_white">
              Singapore has consistenly been one of the highest performing
              countries in terms of standardized testing. For example, Singapore
              was ranked #1 in mathematics, science, and reading in the
              Programme for International Student Assessment (PISA) 2022. While
              the OECD average for the PISA Reading, Math, and Science sections
              were 476, 472, and 485 respectively, Singapore's scores were 543,
              575, and 561. Evidently, Singapore's education system is adept at
              producing successful learning outcomes in terms of assessment
              achievement. However, this prompts the question of whether this
              academic success comes at non-academic costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
