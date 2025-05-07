import styled from "styled-components";

const HeaderTabs = ({ activeTab, onChangeTab, onNewRoom }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tabs>
        <Tab active={activeTab === "all"} onClick={() => onChangeTab("all")}>
          All Rooms
        </Tab>
        <Tab
          active={activeTab === "available"}
          onClick={() => onChangeTab("available")}
        >
          Available
        </Tab>
        <Tab
          active={activeTab === "booked"}
          onClick={() => onChangeTab("booked")}
        >
          Booked
        </Tab>
      </Tabs>
      <AddButton onClick={onNewRoom}>+ New Room</AddButton>
    </div>
  );
};

const Tabs = styled.div`
  width: 80%;
  display: flex;
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