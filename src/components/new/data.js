import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

const benefitOne = {
  title: "Course Details and benefits",
  desc: "A comprehensive guide to mastering C++ programming, this program offers a detailed course focusing on the intricate analysis of data structures, provides a thorough analysis of algorithms, and delivers a well-structured course on SQL.",
  image: benefitOneImg,
  bullets: [
    {
      title: "C++ Fundamentals",
      desc: "Very comprehensive explanation of of c++ programming.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Data Structure",
      desc: "Great source to study detailed analysis of data structures",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Algorithms",
      desc: "Analysis of algorithms",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "SQL",
      desc: "This is well structured course on sql .",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
