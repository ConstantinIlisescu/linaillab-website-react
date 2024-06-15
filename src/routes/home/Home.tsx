import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import MainServicesContainer from "@/components/MainServicesContainer";
import { MAIN, WELCOME, SERVICES } from "@/data/mainPage";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import { useRef } from "react";

const Home = () => {
  useScrollToEffect();

  const home = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(home);

  const homeServices = useRef<HTMLDivElement | null>(null);
  const isVisible3 = useIsVisible(homeServices);

  return (
    <>
      <div
        ref={home}
        className={`home-section-bg-img mx-auto w-full max-w-6xl opacity-0 transition-opacity ease-in duration-1000 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Container>
          <div className="pt-28 pb-4 grid justify-items-stretch h-screen font-italiana">
            <div className="text-start animate-slideInTop opacity-0 [--slideIn-delay:500ms]">
              <p className="text-4xl md:text-5xl pb-4 text-cyan-500">
                {MAIN.topRowFirstTextLine}
              </p>
              <p className="text-7xl md:text-7xl text-fuchsia-500">
                {MAIN.topRowSecondTextLine}
              </p>
            </div>
            <div className="text-end md:justify-self-center my-auto animate-slideInTop opacity-0 [--slideIn-delay:1000ms]">
              <p className="text-5xl md:text-7xl pb-4">
                {MAIN.middleRowFirstTextLine}
              </p>
              <p className="text-5xl md:text-7xl">
                {MAIN.middleRowSecondTextLine}
              </p>
            </div>
            <div className="text-start mt-auto md:text-end text-7xl text-cyan-500 pb-16 lg:pb-4 animate-slideInTop opacity-0 [--slideIn-delay:1500ms]">
              {MAIN.bottomRowTextLine}
            </div>
          </div>
        </Container>
      </div>
      <div className="home-section-welcome-bg-img pt-28 mx-auto w-full max-w-6xl">
        <Container>
          <div className="max-w-lg md:pl-16">
            <div className="text-4xl pb-10">
              <p className="pb-2 text-gray-700 font-italiana">
                {WELCOME.topRowTitleFirstLine}
              </p>
              <p className="text-fuchsia-500 font-italiana">
                {WELCOME.topRowTitleSecondLine}
              </p>
            </div>
            <p className="text-gray-700 pr-10 md:text-lg text-balance">
              {WELCOME.description}
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={homeServices}
        className={`home-section-services-bg-img pt-28 mx-auto w-full opacity-0 max-w-6xl transition-opacity ease-in duration-1000 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Container>
          <div className="max-w-lg ml-auto md:pr-16">
            <div className="text-4xl pb-10 text-right ">
              <p className="text-fuchsia-500 font-italiana">{SERVICES.title}</p>
            </div>
            <div className="space-y-8">
              {SERVICES.services.map((service, index) => (
                <MainServicesContainer
                  key={`${service.title}-${index}`}
                  title={service.title}
                  titleColour={service.titleColour}
                  description={service.description}
                >
                  <OutlineBtnWithIcon
                    additionalStyles={service.buttonAdditionalStyles}
                    text={service.buttonText}
                    href={service.href}
                  />
                </MainServicesContainer>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
