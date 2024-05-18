import { Button } from "@/components/ui/button";

interface ContactMeBtnProps {
  additionalStyles?: string;
}

const ContactMeBtn = ({ additionalStyles }: ContactMeBtnProps) => {
  return (
    <Button
      variant="ghost"
      className={`h-8 border-2 rounded-3xl border-cyan-500 ${additionalStyles}`}
    >
      <p className="p-1 text-md text-cyan-500">Contact Me</p>
    </Button>
  );
};

export default ContactMeBtn;
