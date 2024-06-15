import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import "./Services.css";
import Container from "@/components/ui/container";
import ServiceCard from "@/components/ServiceCard";
import {
  FIRST_SERVICE,
  SERVICES_LIST,
  SERVICES_TOP_SECTION,
} from "@/data/servicesPage";
import ServicesAdditionalInfo from "@/components/ServicesAdditionalInfo";

const Services = () => {
  useScrollToEffect();
  return (
    <>
      <div id={FIRST_SERVICE.id} className="pt-28">
        <div className="services-left-bg-img md:pb-4 max-[1200px]">
          <h1 className="text-7xl md:text-8xl mx-auto w-full max-w-6xl text-cyan-500 text-end md:text-start font-italiana pb-8">
            {SERVICES_TOP_SECTION.title}
          </h1>
          <div className="md:flex items-center">
            <div className="pe-4 md:w-11/12 xl:w-8/12">
              <h2 className="font-italiana text-cyan-500 text-3xl text-end md:hidden">
                {FIRST_SERVICE.title}
              </h2>
              <img
                className="my-rounded-left-full xl:ps-12"
                src={FIRST_SERVICE.imgPath}
                alt="art hand nails"
              />
            </div>
            <Container>
              <div className="max-w-xl mx-auto">
                <h2 className="font-italiana text-cyan-500 text-5xl text-left hidden md:block">
                  {FIRST_SERVICE.title}
                </h2>
                <p className="text-gray-700  md:text-lg py-4 text-balance">
                  {FIRST_SERVICE.description}
                </p>
              </div>
            </Container>
          </div>
        </div>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FIRST_SERVICE.services.map((service, index) => (
              <ServiceCard
                key={`${service.serviceName}-${index}`}
                price={service.price}
                serviceDescription={service.serviceDescription}
                serviceName={service.serviceName}
                duration={service.duration}
                additionalInfo={service.additionalInfo}
              />
            ))}
          </div>
        </Container>
      </div>
      {SERVICES_LIST.map((service, index) => (
        <div
          id={service.id}
          key={"service_list_" + index}
          className={` pt-28 md:pt-36 ${
            index % 2 === 0 ? "services-right-bg-img" : "services-left-bg-img"
          }`}
        >
          <div
            className={`md:flex items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={` md:w-11/12 ${index % 2 === 0 ? "ps-4" : "pe-4"}`}>
              <h2
                className={`font-italiana text-cyan-500 text-3xl md:hidden ${
                  index % 2 === 0 ? "text-start" : "text-end"
                }`}
              >
                {service.title}
              </h2>
              <img
                className={
                  index % 2 === 0
                    ? "my-rounded-right-full xl:pe-12"
                    : "my-rounded-left-full xl:ps-12"
                }
                src={service.imgPath}
                alt="art hand nails"
              />
            </div>
            <Container>
              <div className="max-w-xl mx-auto">
                <h2
                  className={`font-italiana text-cyan-500 text-5xl hidden md:block ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  {service.title}
                </h2>
                <p
                  className={`text-gray-700  md:text-lg py-4 text-balance ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } `}
                >
                  {service.description}
                </p>
                {service.callToAction && (
                  <div
                    className={`max-w-sm w-fit mx-auto md:m-0 ${
                      index % 2 === 0 ? "md:ms-auto" : "md:me-auto"
                    }`}
                  >
                    <ServicesAdditionalInfo
                      additionalInfoObject={service.callToAction}
                    />
                  </div>
                )}
              </div>
            </Container>
          </div>
          <Container>
            <div
              className={
                service.services.length === 1
                  ? "max-w-md mx-auto"
                  : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              }
            >
              {service.services.map((service, index) => (
                <ServiceCard
                  key={`${service.serviceName}-${index}`}
                  price={service.price}
                  serviceDescription={service.serviceDescription}
                  serviceName={service.serviceName}
                  duration={service.duration}
                  additionalInfo={service.additionalInfo}
                />
              ))}
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default Services;
