import Container from "@/components/ui/container";
import {
  BOTTOM_PARAGRAPH_SECTION,
  MIDDLE_PARAGRAPH_SECTION,
  TOP_SECTION,
} from "@/data/aboutMePage";
import MainMyServicesBtn from "@/components/MainMyServicesBtn";
import "./AboutMe.css";
import useScrollToEffect from "@/utils/hooks/useScrollToEffect";

const AboutMe = () => {
  useScrollToEffect();
  return (
    <>
      <div className="pt-28 about-me-top-section-bg-img mx-auto w-full">
        <Container>
          <div className=" md:flex md:flex-row-reverse">
            <div className="px-4 flex flex-col  items-end">
              <div className="text-4xl md:text-6xl pb-4 text-cyan-500 text-end font-italiana">
                {TOP_SECTION.titleFirstRow}
              </div>
              <div className="text-7xl md:text-8xl pb-4 text-lime-500 text-end font-italiana">
                {TOP_SECTION.titleSecondRow}
              </div>
              <p className="text-gray-700  md:text-lg pb-8  max-w-lg">
                {TOP_SECTION.paragraph}
              </p>
            </div>
            <img
              className="w-3/4 md:w-2/4 my-rounded-left-full"
              src={TOP_SECTION.imgPath}
              alt="Image of myself with medium length curly hair and green background"
            />
          </div>
        </Container>
        <div className="w-min mx-auto">
          <MainMyServicesBtn />
        </div>
      </div>
      <div className="pt-8 about-me-middle-section-bg-img">
        <Container>
          {MIDDLE_PARAGRAPH_SECTION.map((paragraph, index) => (
            <p
              key={"middle-paragraph-" + index}
              className="text-gray-700 pb-4 md:text-lg md:max-w-xl md:ps-8 text-balance"
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </div>
      <div className="pt-8">
        <Container>
          <div className="flex flex-row justify-between items-center mx-auto max-w-md">
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
              className="text-gray-700 md:text-lg md:max-w-md mx-auto pb-4 text-balance"
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
