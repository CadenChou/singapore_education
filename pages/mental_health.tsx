import React from "react";
import Image from "next/image";
import mental_health_pic from "../public/mental_health.jpg";
import statistic_pic from "../public/statistic.jpg";
import statistic_pic_2 from "../public/statistic_2.jpeg";

export default function mental_health() {
  return (
    <div>
      <div className="relative w-full h-[45vh]">
        <Image
          src={mental_health_pic}
          alt={""}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-center">
          <span className="bg-gradient-to-r from-gray-800 to-gray-300 text-transparent bg-clip-text">
            Mental Health in Singapore{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="flex flex-col items-center space-y-10 max-w-[80vw]">
          <div className="text-4xl text-singapore_red">
            History of Mental Health in Singapore
          </div>

          <p className="text-lg text-text_white">
            In July 2021, a thirteen-year old boy was hacked to death by a
            sixteen-year old teenager in a secondary school in Singapore. It was
            later found that the sixteen-year old was suffering from clinical
            depression and had attempted suicide two years before. This attack
            was unprecedented and is perhaps indicative of the rising stress,
            anxiety and depression among Singaporean students. Until recently,
            student mental wellbeing had not been a focus of the Singapore
            education system.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10">
        <Image
          src={statistic_pic}
          alt={""}
          className="mt-8 ml-8 w-[45vw] object-contain"
        />
        <div className="flex flex-col items-center w-[40vw]">
          <div className="mt-8 mr-8 space-y-6 text-lg">
            <p>
              The left figure displays data collected from a survey taken by
              undergraduate students from the National University of Singapore
              (NUS), Yale-NUS College, Nanyang Technical University (NTU),
              Singapore Management University (SMU) and Singapore University of
              Technology and Design (SUTD). The graphic below illustrates that
              mental health is a problem for both Singaporean youth and adults.
            </p>
          </div>
          <Image
            src={statistic_pic_2}
            alt={""}
            className="mt-8 mr-8 w-[35vw] h-80  object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <div className="flex flex-col items-center space-y-10 max-w-[80vw]">
          <div className="text-4xl text-singapore_red">
            Causes of stress and other mental health issues
          </div>

          <p className="text-lg text-text_white">
            As the left figure above suggests, for students work and study
            commitments play a large role in causing stress. For primary and
            secondary students, examinations play a large role in student
            stress. An Organisation for Economic Co-operation and Development
            (OECD) comparative study demonstrated that 76% of Sinapore's
            students were anxious about a test even if they were well prepared,
            compared to the OECD average of 55%. Additionally, Singapore is
            known for being a competitive environment, with individuals driven
            by a kiasu (a Hokkien term meaning "afraid of losing out")
            mentality. This competitive playing field can make students place
            large burdens of success on themselves and can also drive parents to
            push their children to the point of mental illness.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * https://files.eric.ed.gov/fulltext/EJ1269600.pdf
 * https://www.todayonline.com/singapore/survey-singapore-undergrads-work-study-stress-academic-grace-days-1929776
 * https://www.tandfonline.com/doi/full/10.1080/09518398.2023.2264247
 */
