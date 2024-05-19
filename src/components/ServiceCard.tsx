import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactMeBtn from "./ContactMeBtn";

interface ServiceCardProp {
  price: string;
  serviceName: string;
  serviceDescription: string;
  duration: string;
  additionalInfo: string;
}

const ServiceCard = ({
  price,
  serviceName,
  serviceDescription,
  duration,
  additionalInfo,
}: ServiceCardProp) => {
  return (
    <div className="border-2 rounded-3xl shadow-md p-4 h-fit">
      <div className="flex justify-between">
        <p className="font-italiana text-3xl text-cyan-500">{price}</p>
        <ContactMeBtn />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{serviceName}</AccordionTrigger>
          <AccordionContent>
            <p className="pb-4">{serviceDescription}</p>
            <p className="pb-4 text-sm">Duration: {duration}</p>
            <p className="text-sm">{additionalInfo}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ServiceCard;
