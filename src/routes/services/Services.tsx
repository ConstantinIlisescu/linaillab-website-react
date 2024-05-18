import "./Services.css";
import Container from "@/components/ui/container";
import ServiceCard from "@/components/ServiceCard";
import { FIRST_SERVICE, SERVICES_TOP_SECTION } from "@/data/servicesPage";

const Services = () => {
  return (
    <div className="pt-28">
      <div className="services-left-bg-img md:pb-4">
        <h1 className="text-7xl md:text-8xl text-cyan-500 text-end font-italiana pb-8">
          {SERVICES_TOP_SECTION.title}
        </h1>
        <div className="md:flex items-center">
          <div className="pe-4 md:w-11/12">
            <h2 className="font-italiana text-cyan-500 text-3xl text-end md:hidden">
              {FIRST_SERVICE.title}
            </h2>
            <img
              className="rounded-br-full my-rounded-tl-full"
              src={FIRST_SERVICE.imgPath}
              alt="art hand nails"
            />
          </div>
          <Container>
            <h2 className="font-italiana text-cyan-500 text-5xl text-left hidden md:block">
              {FIRST_SERVICE.title}
            </h2>
            <p className="text-gray-700  md:text-lg py-4">
              {FIRST_SERVICE.description}
            </p>
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
  );
};

export default Services;
