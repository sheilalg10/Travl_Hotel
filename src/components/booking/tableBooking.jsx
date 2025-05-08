import styled from "styled-components";

export default function TableBookings({ bookings }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Guest</Th>
            <Th>Order Date</Th>
            <Th>Check In</Th>
            <Th>Check Out</Th>
            <Th>Special Request</Th>
            <Th>Room Type</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <Td>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Image src={booking.image} alt="Room" />
                  <div>
                    <div style={{ fontWeight: "bold" }}>{booking.name}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      {booking.id}
                    </div>
                  </div>
                </div>
              </Td>
              <Td>{booking.orderDate}</Td>
              <Td>
                <div>{booking.checkIn.date}</div>
                <div>{booking.checkIn.hour}</div>
              </Td>
              <Td>
                <div>{booking.checkOut.date}</div>
                <div>{booking.checkOut.hour}</div>
              </Td>
              <Td>{booking.specialRequest.text}</Td>
              <Td>{booking.roomType}</Td>
              <Td>
                <StatusBadge status={booking.status}>
                  {booking.status}
                </StatusBadge>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  padding: 20px;
  overflow-x: auto;
  margin-left: 350px;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  font-family: sans-serif;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #f5f5f5;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  user-select: none;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
`;

const StatusBadge = styled.span`
  padding: 4px 10px;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  background-color: ${(props) => {
    switch (props.status) {
      case "Refund":
        return "#28a745";
      case "Pending":
        return "#ffc107";
      case "Canceled":
        return "#dc3545";
      case "Booked":
        return "#17a2b8";
      default:
        return "#6c757d";
    }
  }};
`;

const Image = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
`;
