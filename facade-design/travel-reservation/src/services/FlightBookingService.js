class FlightBookingService {
    bookFlight(details) {
        console.log(`Voo reservado com: ${JSON.stringify(details)}`);
        return { flightId: 'FL123', ...details };
    }
}

module.exports = FlightBookingService;