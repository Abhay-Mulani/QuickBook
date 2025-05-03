const API_URL = import.meta.env.VITE_API_URL;

export const submitBooking = async (bookingData) => {
  try {
    const res = await fetch(`${API_URL}/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) {
      throw new Error('Failed to submit booking');
    }

    return await res.json();
  } catch (error) {
    console.error('Booking submission error:', error);
    throw error;
  }
};
