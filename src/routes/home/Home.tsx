import Container from "@/components/ui/container";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-section-bg-img">
        <Container>
          <div className="pt-28 pb-4 flex flex-col justify-between h-screen font-italiana">
            <div className="text-start">
              <p className="text-4xl pb-4 text-cyan-500">Your</p>
              <p className="text-7xl text-fuchsia-500">ESCAPE</p>
            </div>
            <div className="text-end">
              <p className="text-5xl pb-4">From</p>
              <p className="text-5xl">Everyday</p>
            </div>
            <div className="text-start text-7xl text-cyan-500">ROUTINE</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-5xl pt-36">
          <p className="pb-2 text-gray-700">WELCOME TO</p>
          <p className="text-fuchsia-500">L.I Nail Lab</p>
        </div>
        <p className="text-gray-700">
          L.I Nail Lab is a home-based nail salon located in the Hednesford
          neighbourhood, offering a unique and personalized experience that
          combines style and exceptional service. My cosy and inviting salon
          features top-of-the-line products, exclusive polish brands and
          colours, a range of free soft drinks and homemade coffee. My
          commitment to quality ensures that every visit to my salon feels like
          a luxurious and indulgent escape in the comfort of your own
          neighbourhood.
        </p>
      </Container>
    </>
  );
};

export default Home;
