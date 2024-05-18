import { Button } from "@/components/ui/button";

interface MainMyServicesBtnProps {
  additionalStyles?: string;
}

const MainMyServicesBtn = ({ additionalStyles }: MainMyServicesBtnProps) => {
  return (
    <Button
      variant="ghost"
      className={`h-12 border-2 rounded-3xl border-cyan-500 ${additionalStyles}`}
    >
      <p className="p-4 text-xl text-cyan-500">MY SERVICES</p>
    </Button>
  );
};

export default MainMyServicesBtn;
