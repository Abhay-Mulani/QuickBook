const db = require('../config/db');

exports.createBooking = (req, res) => {
  const { productName, quantity, addOns, totalFare } = req.body;
  const query = 'INSERT INTO bookings (product_name, quantity, addons, total_fare) VALUES (?, ?, ?, ?)';
  const values = [productName, quantity, addOns.join(','), totalFare];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting booking:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Booking saved', bookingId: result.insertId });
  });
};
