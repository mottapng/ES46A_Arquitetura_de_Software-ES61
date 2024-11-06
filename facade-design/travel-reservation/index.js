const TravelFacade = require('./src/TravelFacade');

const travelFacade = new TravelFacade();

const tripDetails = {
    flight: { from: 'BR', to: 'EUA', date: '2024-10-24' },
    hotel: { location: 'EUA', nights: 3 },
    car: { type: 'SEDAN', days: 3 },
};

const booking = travelFacade.bookCompleteTrip(tripDetails);
console.log('Reserva de viagem completa com:', booking);