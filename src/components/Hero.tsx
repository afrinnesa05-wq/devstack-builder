import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-base-100">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Build Your Ideal
            <br />

          <span className="brand-gradient">
             Development Stack
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <button className="btn brand-button border-none px-7 shadow-md hover:opacity-90">
              Explore Technologies
            </button>

            <button className="btn btn-outline border-gray-300 bg-white px-8 text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2">

          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-80 object-contain md:w-96 lg:w-[420px]"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;