class HotelBookingService {
    bookHotel(details) {
        console.log(`Hotel reservado com: ${JSON.stringify(details)}`);
        return { hotelId: 'HT456', ...details };
    }
}

module.exports = HotelBookingService;