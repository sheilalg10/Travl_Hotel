import { useSelector } from "react-redux";
import styled from "styled-components";

export default function TableRooms() {
  const rooms = useSelector((state) => state.rooms.data);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Room</Th>
            <Th>Bed Type</Th>
            <Th>Floor</Th>
            <Th>Facilities</Th>
            <Th>Rate</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <Td>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Image src={room.image} alt="Room" />
                  <div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      {room.roomNumber}
                    </div>
                    <div style={{ fontWeight: "bold" }}>{room.name}</div>
                  </div>
                </div>
              </Td>
              <Td>{room.bedType}</Td>
              <Td>Floor {room.roomFloor}</Td>
              <Td>{room.facilities.join(", ")}</Td>
              <Td>
                ${room.rate}{" "}
                <span style={{ fontSize: "12px", color: "#aaa" }}>/night</span>
              </Td>
              <Td>
                <StatusBadge status={room.status}>{room.status}</StatusBadge>
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
  background-color: ${(props) =>
    props.status === "Available" ? "#28a745" : "#dc3545"};
`;

const Image = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
`;
