import {
  ADDRESS_AND_CONTACT_INFO,
  CONTACT_ME_TITLE,
  SCHEDULE,
} from "@/data/contactMePage";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ContactMe.css";
import Container from "@/components/ui/container";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const icons = {
  phone: <FaPhoneFlip className="size-8 text-cyan-500" />,
  email: <MdEmail className="size-8 text-cyan-500" />,
  instagram: <RiInstagramFill className="size-8 text-cyan-500" />,
  facebook: <FaFacebook className="size-8 text-cyan-500" />,
} as { [key: string]: React.ReactNode };

const ContactMe = () => {
  const location = useLocation();
  const { hash, pathname } = location;

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);
  return (
    <>
      <div className="pt-28">
        <div className="contact-me-title-section-bg-img mb-4 max-[1200px]">
          <Container>
            {CONTACT_ME_TITLE.map((title) => (
              <h2 className="text-7xl md:text-8xl mx-auto w-full max-w-6xl text-cyan-500 text-start font-italiana pb-8">
                {title}
              </h2>
            ))}
          </Container>
        </div>
        <div className="contact-me-address-section-bg-img mb-8 max-[1200px]">
          <Container>
            <div className="flex flex-col justify-end">
              <div className="pb-4">
                {ADDRESS_AND_CONTACT_INFO.address.map((addressTitleList) => (
                  <h3 className="font-italiana text-cyan-500 text-3xl text-end">
                    {addressTitleList}
                  </h3>
                ))}
              </div>
              <div>
                {ADDRESS_AND_CONTACT_INFO.contactInfo.map((contactItem) => (
                  <a
                    className="flex justify-end pt-3"
                    href={contactItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-gray-700 pt-1 md:text-lg text-balance pe-2">
                      {contactItem.description}
                    </p>

                    {icons[contactItem.icon]}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <div className="contact-me-title-section-bg-img max-[1200px]">
          <Container>
            <div className="flex flex-col">
              <div className="flex flex-col justify-start">
                <div className="pb-4">
                  {SCHEDULE.title.map((title) => (
                    <h3 className="font-italiana text-cyan-500 text-3xl text-start">
                      {title}
                    </h3>
                  ))}
                </div>
                <div className="mb-4">
                  {SCHEDULE.scheduledHours.map((schedule) => (
                    <div className="flex justify-between max-w-60 text-gray-700 pt-1 md:text-lg text-balance pe-2">
                      <p>{schedule.day}</p>
                      <p>{schedule.status}</p>
                    </div>
                  ))}
                </div>
              </div>
              <iframe
                className="rounded-lg w-[100%] h-60"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.046325648041!2d-2.0150400118932463!3d52.71330905000383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a75a2a6cc418d%3A0x5b39d3cff4554809!2sL.I.%20Nail%20Lab!5e0!3m2!1sen!2suk!4v1717875626577!5m2!1sen!2suk"
                loading="lazy"
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
      <></>
    </>
  );
};

export default ContactMe;
