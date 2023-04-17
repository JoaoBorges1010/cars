import { useSelector } from 'react-redux';

function CarValue() {
  // Refactored code bellow with everything

  const totalCost = useSelector (({cars: { data, searchTerm }}) =>
      data
      .filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc += car.cost, 0)
  );
    // USING reduce funtion
    // return filteredCars.reduce((acc, car) => {
    //   return acc += car.cost
    // }, 0);

    // another way
    // let cost = 0
    // for (let car of filteredCars) {
    //   cost += car.cost
    // };
    // return cost
  return <div className="car-value">
    Total Cost: ${totalCost}
  </div>;
};

export default CarValue;
