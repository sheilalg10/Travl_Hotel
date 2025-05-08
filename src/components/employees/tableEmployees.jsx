import styled from "styled-components";

export default function TableEmployees({ employees }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Job Desk</Th>
            <Th>Schedule</Th>
            <Th>Contact</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Td>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Image src={employee.image} alt="Room" />
                  <div>
                    <div style={{ fontWeight: "bold" }}>{employee.name}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      {employee.id}
                    </div>
                    <div>{employee.joined}</div>
                  </div>
                </div>
              </Td>
              <Td>{employee.jobDesk.map((item, index) =>(
                <div key={index} style={{ marginBottom: "6px" }}>{item}</div>
              ))}</Td>
              <Td>
                <div>{employee.schedule.join(", ")}</div>
                <div style={{ marginTop: "4px", color: "#007bff", cursor: "pointer", fontSize: "12px" }}>Check schedule</div>
              </Td>              
              <Td>{employee.contact}</Td>
              <Td>
                <StatusBadge status={employee.status}>
                  {employee.status}
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
  background-color: ${(props) =>
    props.status === "Active" ? "#28a745" : "#dc3545"};
`;

const Image = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
`;
