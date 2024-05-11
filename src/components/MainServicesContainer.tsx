import React from "react";

interface MainServicesContainerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  titleColour: string;
}

const MainServicesContainer = ({
  children,
  title,
  description,
  titleColour,
}: MainServicesContainerProps) => {
  return (
    <div className="individual-service-container">
      <div className="flex justify-between">
        <p className={`text-2xl ${titleColour}`}>{title}</p>
        {children}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default MainServicesContainer;
