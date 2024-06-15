import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import OutlineRoundIcon from "@/components/OutlineRoundIcon";
import { RxDot } from "react-icons/rx";

interface ServicesAdditionalInfoProps {
  additionalInfoObject: {
    title: string;
    sections: {
      title: string;
      imagePath?: string;
      descriptions?:
        | {
            description?: string;
            descriptionBulletPoints?: string[];
          }[];
    }[];
  };
}

const ServicesAdditionalInfo = ({
  additionalInfoObject,
}: ServicesAdditionalInfoProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center gap-2 pb-4 text-cyan-500 font-italiana text-xl tracking-widest">
          <p>{additionalInfoObject.title}</p>
          <OutlineRoundIcon />
        </div>
      </SheetTrigger>
      <SheetContent
        className="pt-16 w-[90vw] ml-[5vw] overflow-scroll"
        side="left"
      >
        <>
          {additionalInfoObject.sections.map((section, index) => (
            <div
              key={`services_section_container_${index}`}
              className="max-w-2xl mx-auto"
            >
              <div className="flex justify-between items-center text-cyan-500 pb-4">
                <h3 className="text-xl font-italiana md:text-3xl">
                  {section.title}
                </h3>
                {section.imagePath && (
                  <img
                    src={section.imagePath}
                    alt="..."
                    className="w-28 my-rounded-left-full"
                  />
                )}
              </div>
              <div>
                {section.descriptions &&
                  section.descriptions.map((description, index) => (
                    <div
                      key={`service_section_description_${index}`}
                      className="text-gray-700  md:text-lg max-w-lg mx-auto"
                    >
                      {description.description && (
                        <p className="pb-4">{description.description}</p>
                      )}
                      {description.descriptionBulletPoints && (
                        <ul className="pb-4 max-w-md mx-auto">
                          {description.descriptionBulletPoints.map(
                            (bulletPoint, index) => (
                              <li
                                key={`service_section_description_bullet_point_${index}`}
                                className="flex gap-2 "
                              >
                                <RxDot className="w-5 h-5" />
                                {bulletPoint}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </>
      </SheetContent>
    </Sheet>
  );
};

export default ServicesAdditionalInfo;
