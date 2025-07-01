import React from "react";
const mechanicTypes = [
  "Panel Beater",
  "General Auto",
  "Diesel mechanics",
  "Engine Specialists",
  "Brake and Suspension Specialists",
  "Tire Technicians",
  "Heavy Vehicle Mechanics",
  "Tinkering and Painting Workers",
  "Auto glass mechanics",
];
const Mechanicoptions = () => {
    return(
        <>
        {/* Browse By Type */}
      <section className="py-12 px-6">
        <h2 className="text-center text-xl font-semibold mb-8">Browse by Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
          {mechanicTypes.map((type, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <span className="text-sm">{type}</span>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}
export default Mechanicoptions