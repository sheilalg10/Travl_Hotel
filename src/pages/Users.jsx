import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderTabs from "../components/employees/headerTabs";
import TableEmployees from "./../components/employees/tableEmployees";
import styled from "styled-components";

const EmployeesPage = () => {
  const [filter, setFilter] = useState("all");

  const employees = useSelector((state) => state.employees.data);

  const filteredemployees = employees.filter((employee) => {
    const status = employee.status?.toLowerCase();
    if (filter === "all") return true;
    return status === filter;
  });

  return (
    <StyledUsers>
      <HeaderTabs activeTab={filter} onChangeTab={setFilter} />
      <TableEmployees employees ={filteredemployees} />
    </StyledUsers>
  );
};

const StyledUsers = styled.div`
  overflow-y: scroll;
`;

export default EmployeesPage;
