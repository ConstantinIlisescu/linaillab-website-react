import Container from "@/components/ui/container";
import {
  BOTTOM_PARAGRAPH_SECTION,
  MIDDLE_PARAGRAPH_SECTION,
  TOP_SECTION,
} from "@/data/aboutMePage";
import MainMyServicesBtn from "@/components/MainMyServicesBtn";
import myImage from "@/assets/images/about-me-picture.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="pt-28 about-me-top-section-bg-img">
        <Container>
          <div className="text-4xl md:text-5xl pb-4 text-cyan-500 text-end font-italiana">
            {TOP_SECTION.titleFirstRow}
          </div>
          <div className="text-7xl md:text-5xl pb-4 text-lime-500 text-end font-italiana">
            {TOP_SECTION.titleSecondRow}
          </div>
          <p className="text-gray-700  md:text-lg pb-8">
            {TOP_SECTION.paragraph}
          </p>
        </Container>
        <img
          className="w-3/4 my-rounded-tl-full rounded-br-full"
          src={myImage}
          alt="Image of myself with medium length curly hair and green background"
        />
        <div className="w-min mx-auto">
          <MainMyServicesBtn />
        </div>
      </div>
      <div className="pt-8 about-me-middle-section-bg-img">
        <Container>
          {MIDDLE_PARAGRAPH_SECTION.map((paragraph, index) => (
            <p
              key={"middle-paragraph-" + index}
              className="text-gray-700  md:text-lg pb-4"
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </div>
      <div className="pt-8">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <div className="w-24 h-2 rounded-tl-full rounded-br-full bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-bl-full rounded-tr-full bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-tl-full rounded-br-full bg-cyan-400"></div>
            <div className="w-24 h-2 rounded-bl-full rounded-tr-full bg-cyan-400"></div>
          </div>
        </Container>
      </div>
      <div className="pt-8">
        <Container>
          {BOTTOM_PARAGRAPH_SECTION.map((paragraph, index) => (
            <p
              key={"bottom-paragraph-" + index}
              className="text-gray-700  md:text-lg pb-4"
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
