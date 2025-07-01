import { FiSearch } from "react-icons/fi";
const Filterbar = () => {
    return (
        <>
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 bg-white shadow-md px-4 py-3 w-fit mx-auto rounded-full">
          <select className="px-3 py-2 bg-white text-sm border rounded-full">
            <option>Diesel mechanics</option>
          </select>
          <select className="px-3 py-2 bg-white text-sm border rounded-full">
            <option>Location</option>
          </select>
          <select className="px-3 py-2 bg-white text-sm border rounded-full">
            <option>Range</option>
          </select>
          <select className="px-3 py-2 bg-white text-sm border rounded-full">
            <option>All Prices</option>
          </select>
          <button className="bg-blue-600 text-white p-2 rounded-full">
            <FiSearch />
          </button>
        </div>
        </>
    )
}
export default Filterbar