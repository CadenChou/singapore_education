import React from "react";
import Image from "next/image";
import reforms_pic from "../public/reforms_pic.jpg";
import reforms_pic_2 from "../public/reforms_pic_2.jpg";
import students_pic from "../public/students.jpeg";

export default function reforms() {
  return (
    <div>
      <div className="relative w-full h-[45vh] mb-16">
        <Image src={reforms_pic} alt={""} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-center">
          <span className="bg-gradient-to-r from-gray-200 to-gray-200 text-transparent bg-clip-text">
            Student Wellbeing Reforms
          </span>
        </div>
      </div>
      <div className="space-y-16">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-10 max-w-[40vw]">
              <div className="text-4xl text-singapore_red">
                The move towards holistic outcomes
              </div>

              <p className="text-lg text-text_white">
                Recently, as student mental health has moved into the spotlight
                of policy making, Singapore has been addressing mental wellbeing
                by creating reforms targeted towards holistic outcomes, as
                opposed to just academic performance and examination results.
                The Ministry of Education (MOE) has been dedicating significant
                efforts to transform its educational approach into one that is
                holistic, engaging, joyful, meaningful, and values-based.
              </p>
            </div>
          </div>
          <Image
            src={students_pic}
            alt={""}
            className="w-[40vw]  object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-10 max-w-[80vw]">
            <div className="text-4xl text-singapore_red">
              Socioemotional Learning
            </div>

            <p className="text-lg text-text_white">
              The socioemotional learning framework was first implemented in
              2005. The SEL framework helps school programs navigate
              socioemotional learning, and the key aspcets of SEL are
              self-awareness, social awareness, self-management, relationship
              management, and responsible decision-making. Socioemotional
              learning is now a compulsary part of Singapore's national
              curriculum. Within the SEL framework, cyber wellness has been
              introduced to address the complexities of interactions on social
              media by equipting students with the principles and tools
              necessary to be responsible and mature digital learners.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-10 max-w-[80vw]">
            <div className="text-4xl text-singapore_red">
              More on Holistic Outcomes
            </div>

            <p className="text-lg text-text_white">
              In 2014, the 21st Century Competencies framework was launched to
              aid the holistic development of students. The framework's core
              values are respect, responsibility, integrity, care, resilience,
              and harmony. The framework highlights the importance of Social and
              Emotional Competencies as a basis for students to navigate their
              own emotions and establish connections with others. Additionally,
              as part of holistic development and wellbeing, the MOE introduced
              the outdoor education initiative in 2016. This initiative mandates
              that every secondary three student must participate in a 5-day
              expeditional-based camp on an off-shore island.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-10 max-w-[80vw]">
            <div className="text-4xl text-singapore_red">
              Grades and Assessments
            </div>

            <p className="text-lg text-text_white">
              In recent years, the Ministry of Education has been taking
              measures to minimize the negative impact that grades and
              assessments have on student wellbeing. For example, the MOE has
              reduced emphasis on grades as a gauge of student success by
              discontinuing the practice of publicizing school rankings and the
              names of the highest achievers in national examinations. The MOE
              is also taking measures to reduce school-based assessments. For
              example, the MOE removed all weighted assessments and examinations
              from Primary One and Primary Two. From 2019 to 2021, the Ministry
              also removed midyear examinations for Primary Three, Primary Five,
              Secondary One, and Secondary Three.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-around text-3xl text-singapore_red">
          <div className="max-w-[40vw] flex flex-col items-center space-y-4">
            <div>More on Holistic Outcomes</div>
            <p className="text-lg text-text_white">
              In 2014, the 21st Century Competencies framework was launched to
              aid the holistic development of students. The framework's core
              values are respect, responsibility, integrity, care, resilience,
              and harmony. The framework highlights the importance of Social and
              Emotional Competencies as a basis for students to navigate their
              own emotions and establish connections with others. Additionally,
              as part of holistic development and wellbeing, the MOE introduced
              the outdoor education initiative in 2016. This initiative mandates
              that every secondary three student must participate in a 5-day
              expeditional-based camp on an off-shore island.
            </p>
          </div>
          <div className="max-w-[40vw] flex flex-col items-center space-y-4">
            <div>Grades and Assessments</div>
            <p className="text-lg text-text_white">
              In recent years, the Ministry of Education has been taking
              measures to minimize the negative impact that grades and
              assessments have on student wellbeing. For example, the MOE has
              reduced emphasis on grades as a gauge of student success by
              discontinuing the practice of publicizing school rankings and the
              names of the highest achievers in national examinations. The MOE
              is also taking measures to reduce school-based assessments. For
              example, the MOE removed all weighted assessments and examinations
              from Primary One and Primary Two.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
/**
 * https://www.brookings.edu/articles/singapores-educational-reforms-toward-holistic-outcomes/
 * https://www.brookings.edu/wp-content/uploads/2023/03/Brief_Singapores-educational-reforms-toward-holistic-outcomes_FINAL.pdf
 * https://files.eric.ed.gov/fulltext/EJ1269600.pdf
 */
