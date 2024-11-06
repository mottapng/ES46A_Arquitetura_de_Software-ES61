const FlightBookingService = require('./services/FlightBookingService');
const HotelBookingService = require('./services/HotelBookingService');
const CarRentalService = require('./services/CarRentalService');

class TravelFacade {
    constructor() {
        this.flightService = new FlightBookingService();
        this.hotelService = new HotelBookingService();
        this.carService = new CarRentalService();
    }

    bookCompleteTrip(tripDetails) {
        const flight = this.flightService.bookFlight(tripDetails.flight);
        const hotel = this.hotelService.bookHotel(tripDetails.hotel);
        const car = this.carService.rentCar(tripDetails.car);

        return {
            flight,
            hotel,
            car,
        };
    }
}

module.exports = TravelFacade;