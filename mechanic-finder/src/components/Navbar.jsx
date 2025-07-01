import { FaPhoneAlt } from "react-icons/fa";
const NavBar = () => {
    return (
        <>
        {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FaPhoneAlt className="text-blue-600" />
          <span>+27 813 456 789</span>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          <a href="#">Home</a>
          <a href="#">Listings</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#" className="text-blue-600 font-semibold">Sign In</a>
        </nav>
        <button className="hidden md:block border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm">
          Submit Listing
        </button>
      </header>
        </>
    )
}
export default NavBar