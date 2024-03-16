import "./hero.css";
const Hero = () => {
  return (
    <div>
      <div style={{ minHeight: "600px" }} className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[800px]">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Crafting culinary delights with your health in mind! Discover a
              menu that marries taste and nutrition seamlessly, offering a feast
              for both palate and physique.
            </p>
            <button className="btn bg-green-500">Explore Now</button>
            <button className="btn bg-transparent text-white ml-4">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
