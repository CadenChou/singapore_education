import React from "react";
import references_pic from "../public/references_pic.jpg";
import Image from "next/image";
import Link from "next/link";

export default function references() {
  const sources = [
    "https://www.singstat.gov.sg/modules/infographics/population",
    "https://www.singstat.gov.sg/modules/infographics/population",
    "https://en.wikipedia.org/wiki/Singapore",
    "https://files.eric.ed.gov/fulltext/EJ1269600.pdf",
    "https://www.todayonline.com/singapore/survey-singapore-undergrads-work-study-stress-academic-grace-days-1929776",
    "https://www.tandfonline.com/doi/full/10.1080/09518398.2023.2264247",
    "https://www.brookings.edu/wp-content/uploads/2023/03/Brief_Singapores-educational-reforms-toward-holistic-outcomes_FINAL.pdf",
    "https://cdn.shortpixel.ai/spai/q_lossy+w_1029+h_772+to_webp+ret_img/awaken.sg/wp-content/uploads/2021/12/mental-health-in-Singapore.jpg",
    "https://onecms-res.cloudinary.com/image/upload/s--q65EIGwY--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/file-photo-of-students-in-singapore---1529496_0.png?itok=S77zZStx",
  ];
  return (
    <div>
      <div className="relative w-full h-[45vh] mb-16">
        <Image src={references_pic} alt={""} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-center">
          <span className="bg-gradient-to-r from-gray-100 to-gray-100 text-transparent bg-clip-text">
            References/Sources
          </span>
        </div>
      </div>
      <div className="flex flex-col text-lg m-5 space-y-5">
        {sources.map((source, idx) => {
          return (
            <Link
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ABAB5]"
            >
              {idx + 1}. {source}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Background:
 * Population: https://www.singstat.gov.sg/modules/infographics/population
 * GDP/capita: https://www.imf.org/external/datamapper/profile/SGP
 * Sources:
 * https://en.wikipedia.org/wiki/Singapore
 *
 *
 *
 * statistic_pic: https://www.todayonline.com/singapore/survey-singapore-undergrads-work-study-stress-academic-grace-days-1929776
 * stat pic 2: https://cdn.shortpixel.ai/spai/q_lossy+w_1029+h_772+to_webp+ret_img/awaken.sg/wp-content/uploads/2021/12/mental-health-in-Singapore.jpg
 * student pic: https://onecms-res.cloudinary.com/image/upload/s--q65EIGwY--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/file-photo-of-students-in-singapore---1529496_0.png?itok=S77zZStx
 *
 */
