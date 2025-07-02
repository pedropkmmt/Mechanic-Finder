import MechanicTypes from "../components/MechanicTypes";
import NavBar from "../components/Navbar";
import Filterbar from "../features/FilterBar";
import MechanicServiceCards from "../components/MechanicServiceCard";
import MechanicSearchInterface from "../components/SearchedMechanics";

const FindMechanicPage = () => {
  return (
    <div className="font-sans">
      <NavBar/>
      {/* Hero Section */}
      <section className="bg-blue-50 text-center py-16 lg:py-20">
        <h5 className="text-sm text-gray-500 mb-2">Find Mechanics near you</h5>
        <h1 className="text-4xl font-bold mb-6">
          Find Your <span className="text-blue-600">Mechanic</span>
        </h1>
        {/* Filter Bar */}
        <Filterbar/>
        {/* Car Image */}
        <div className="mt-10">
          <img
            src="car.png"
            alt="Car"
            className="mx-auto w-[80%] max-w-3xl"
          />
        </div>
      </section>
       {/* Browse By Type */}
       < MechanicTypes />
        {/* Looking for a Mechanic Card */}
        <MechanicServiceCards/>

        {/* Searched Mechanics */}
        <MechanicSearchInterface/>
    </div>
  );
};

export default FindMechanicPage;
