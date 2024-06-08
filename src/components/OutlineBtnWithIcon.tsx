import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa6";

interface OutlineBtnWithIconProps {
  additionalStyles: string;
  text: string;
  href: string;
}

const OutlineBtnWithIcon = ({
  additionalStyles,
  text,
  href,
}: OutlineBtnWithIconProps) => {
  return (
    <HashLink to={href}>
      <Button
        variant="ghost"
        className={`border-2 rounded-2xl ${additionalStyles}`}
      >
        {text} <FaArrowRight className="ms-1 h-4 w-4" />
      </Button>
    </HashLink>
  );
};

export default OutlineBtnWithIcon;
