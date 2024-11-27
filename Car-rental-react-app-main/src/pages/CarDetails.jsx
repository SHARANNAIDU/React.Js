import { useParams } from 'react-router-dom';
import carsData from '../data/cars.json';

const CarDetails = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) {
    return <h1>Car not found</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <img src={car.image} alt={car.name} className="w-full h-60 object-cover rounded mt-4" />
      <p className="mt-4">{car.description}</p>
      <p className="text-xl mt-2">Price: {car.price}</p>
    </div>
  );
};

export default CarDetails;
