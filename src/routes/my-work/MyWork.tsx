import Container from "@/components/ui/container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageLinksNumber } from "@/data/myWorkPage";

const MyWork = () => {
  return (
    <Container className=" pt-24">
      <div className="grid grid-cols-2 gap-2">
        {(() => {
          const options = [];

          for (let i = 0; i <= imageLinksNumber; i++) {
            options.push(
              <LazyLoadImage
                width="300px"
                height="100%"
                src={`https://storage.cloud.google.com/linaillab-my-work-images/${i}-.jpg`}
                alt="..."
              />
            );
          }

          return options;
        })()}
      </div>
    </Container>
  );
};

export default MyWork;
