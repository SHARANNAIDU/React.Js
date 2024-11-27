import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{car.name}</h2>
      <p className="text-gray-700">{car.price}</p>
      <Link to={`/cars/${car.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
};

export default CarCard;
