import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

interface OutlineBtnWithIconProps {
  additionalStyles: string;
  text: string;
}

const OutlineBtnWithIcon = ({
  additionalStyles,
  text,
}: OutlineBtnWithIconProps) => {
  return (
    <Button
      variant="ghost"
      className={`border-2 rounded-2xl ${additionalStyles}`}
    >
      {text} <FaArrowRight className="ms-1 h-4 w-4" />
    </Button>
  );
};

export default OutlineBtnWithIcon;
