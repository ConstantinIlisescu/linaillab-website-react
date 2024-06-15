import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import Container from "@/components/ui/container";
import { AsyncImage } from "loadable-image";
import { imageLinksNumber } from "@/data/myWorkPage";
import { Fade } from "transitions-kit";

const MyWork = () => {
  useScrollToEffect();
  const options = [];

  for (let i = 0; i <= imageLinksNumber; i++) {
    options.push(`myWork/${i}-.jpg`);
  }
  return (
    <Container className=" pt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((image) => (
          <AsyncImage
            src={image}
            style={{
              zIndex: 0,
              width: "100%",
              height: "auto",
              aspectRatio: 9 / 12,
              borderRadius: 3,
            }}
            loader={<div style={{ background: "rgba(61, 216, 240,0.1)" }} />}
            error={<div style={{ background: "rgba(61, 216, 240,0.1)" }} />}
            Transition={Fade}
          />
        ))}
      </div>
    </Container>
  );
};

export default MyWork;
