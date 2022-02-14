import AboutContent from "./AboutPage_components/AboutContent";
import Colarge from "./AboutPage_components/Colarge";

const Speaker = () => {
  return (
    <>
      <div className="border-t-4 border-red-700 bg-black">
        <main className="grid lg:grid-cols-2 xl:grid-cols-11 2xl:gap-12  xl:px-2 2xl:px-24 mx-14 py-8">
          <AboutContent />
          <Colarge />
        </main>
      </div>
    </>
  );
};

export default Speaker;