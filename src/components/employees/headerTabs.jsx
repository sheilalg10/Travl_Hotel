import styled from "styled-components";

const HeaderTabs = ({ activeTab, onChangeTab, onNewEmployee }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tabs>
        <Tab active={activeTab === "all"} onClick={() => onChangeTab("all")}>
          All Employee
        </Tab>
        <Tab
          active={activeTab === "active"}
          onClick={() => onChangeTab("active")}
        >
          Active Employee
        </Tab>
        <Tab
          active={activeTab === "inactive"}
          onClick={() => onChangeTab("inactive")}
        >
          Inactive Employee
        </Tab>
      </Tabs>
      <AddButton onClick={onNewEmployee}>+ New Employee</AddButton>
    </div>
  );
};

const Tabs = styled.div`
  width: 70%;
  display: flex;
  margin-left: 200px;
  gap: 2rem;
  align-items: center;
`;

const Tab = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#004d40" : "#888")};
  border-bottom: ${({ active }) => (active ? "2px solid #004d40" : "none")};
  cursor: pointer;
  padding: 0.5rem 0;
`;

const AddButton = styled.button`
  margin-left: auto;
  background: #004d40;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export default HeaderTabs;
