import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderTabs from "../components/booking/headerTabs";
import TableBookings from './../components/booking/tableBooking';

const BookingsPage = () => {
  const [filter, setFilter] = useState("all");

  const bookings = useSelector((state) => state.bookings.data);

  const filteredbookings = bookings
    .filter((booking) => {
      const status = booking.status?.toLowerCase();
      if (filter === "all") return true;
      return status === filter;
    });

  return (
    <>
      <HeaderTabs
        activeTab={filter}
        onChangeTab={setFilter}       
      />
      <TableBookings
        bookings={filteredbookings}
      />
    </>
  )};

export default BookingsPage;
