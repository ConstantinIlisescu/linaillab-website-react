import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import MainServicesContainer from "@/components/MainServicesContainer";
import { MAIN, WELCOME, SERVICES } from "@/data/mainPage";

const Home = () => {
  return (
    <>
      <div className="mobile-home-section-bg-img tablet-home-section-bg-img ">
        <Container>
          <div className="pt-28 pb-4 grid justify-items-stretch h-screen font-italiana">
            <div className="text-start">
              <p className="text-4xl sm:text-5xl pb-4 text-cyan-500">
                {MAIN.topRowFirstTextLine}
              </p>
              <p className="text-7xl sm:text-8xl text-fuchsia-500">
                {MAIN.topRowSecondTextLine}
              </p>
            </div>
            <div className="text-end sm:justify-self-center my-auto">
              <p className="text-5xl sm:text-6xl pb-4">
                {MAIN.middleRowFirstTextLine}
              </p>
              <p className="text-5xl sm:text-6xl">
                {MAIN.middleRowSecondTextLine}
              </p>
            </div>
            <div className="text-start mt-auto sm:text-end text-7xl sm:text-8xl text-cyan-500">
              {MAIN.bottomRowTextLine}
            </div>
          </div>
        </Container>
      </div>
      <div className="mobile-home-section-welcome-bg-img pt-28">
        <Container>
          <div className="text-4xl pb-10">
            <p className="pb-2 text-gray-700 font-italiana">
              {WELCOME.topRowTitleFirstLine}
            </p>
            <p className="text-fuchsia-500 font-italiana">
              {WELCOME.topRowTitleSecondLine}
            </p>
          </div>
          <p className="text-gray-700 pr-10">{WELCOME.description}</p>
        </Container>
      </div>
      <div className="mobile-home-section-services-bg-img pt-28 mb-28">
        <Container>
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
                />
              </MainServicesContainer>
            ))}
          </div>
        </Container>
      </div>
      <div className="mobile-home-section-footer-bg-img pt-28 h-60"></div>
    </>
  );
};

export default Home;
