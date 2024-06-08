import { Button } from "@/components/ui/button";
import { CONTACT_ME_BTN_LINK } from "@/data/buttonLinks";
import { Link } from "react-router-dom";

interface ContactMeBtnProps {
  additionalStyles?: string;
}

const ContactMeBtn = ({ additionalStyles }: ContactMeBtnProps) => {
  return (
    <Link to={CONTACT_ME_BTN_LINK}>
      <Button
        variant="ghost"
        className={`h-8 border-2 rounded-3xl border-cyan-500 ${additionalStyles}`}
      >
        <p className="p-1 text-md text-cyan-500">Contact Me</p>
      </Button>
    </Link>
  );
};

export default ContactMeBtn;
