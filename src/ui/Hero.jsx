import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#251d58] leading-tight">
              We Build
              <br />
              <span className="text-amber-600">
                Your Dream
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-sm leading-8 max-w-xl">
              Online Real Estate Agency, the modern way to sell your own home.
              You can use Griffin Residential to market your property with
              confidence and reach more buyers.
            </p>

            <Link
              to="/booking"
              className="inline-block mt-8 bg-[#251d58] hover:bg-amber-700 text-white px-8 py-3 rounded-sm transition duration-300"
            >
              Booking
            </Link>

          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={banner}
              alt="Luxury Living"
              className="w-full max-w-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;