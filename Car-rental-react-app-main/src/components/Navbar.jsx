import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Car Rental</h1>
      <div>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/cars" className="mx-2 hover:underline">Cars</Link>
      </div>
    </nav>
  );
};

export default Navbar;
