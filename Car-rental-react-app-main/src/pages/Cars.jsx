import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carsData); // Load mock data
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
