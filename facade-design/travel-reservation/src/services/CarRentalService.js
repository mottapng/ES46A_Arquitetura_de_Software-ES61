class CarRentalService {
    rentCar(details) {
        console.log(`Carro alugado com: ${JSON.stringify(details)}`);
        return { carId: 'CR789', ...details };
    }
}

module.exports = CarRentalService;