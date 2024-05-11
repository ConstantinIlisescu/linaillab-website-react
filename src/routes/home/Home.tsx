import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import MainServicesContainer from "@/components/MainServicesContainer";
import { MAIN, WELCOME, SERVICES } from "@/data/mainPage";

const Home = () => {
  return (
    <>
      <div className="mobile-main-section-bg-img">
        <Container>
          <div className="pt-28 pb-4 flex flex-col justify-between h-screen font-italiana">
            <div className="text-start">
              <p className="text-4xl pb-4 text-cyan-500">
                {MAIN.topRowFirstTextLine}
              </p>
              <p className="text-7xl text-fuchsia-500">
                {MAIN.topRowSecondTextLine}
              </p>
            </div>
            <div className="text-end">
              <p className="text-5xl pb-4">{MAIN.middleRowFirstTextLine}</p>
              <p className="text-5xl">{MAIN.middleRowSecondTextLine}</p>
            </div>
            <div className="text-start text-7xl text-cyan-500">
              {MAIN.bottomRowTextLine}
            </div>
          </div>
        </Container>
      </div>
      <div className="main-section-welcome-bg-img pt-28">
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
      <div className="main-section-services-bg-img pt-28 mb-28">
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
      <div className="main-section-footer-bg-img pt-28 h-60"></div>
    </>
  );
};

export default Home;
