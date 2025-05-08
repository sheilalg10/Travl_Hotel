import styled from "styled-components";

const HeaderTabs = ({ activeTab, onChangeTab }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tabs>
        <Tab active={activeTab === "all"} onClick={() => onChangeTab("all")}>
          All Bookings
        </Tab>
        <Tab
          active={activeTab === "refund"}
          onClick={() => onChangeTab("refund")}
        >
          Refund
        </Tab>
        <Tab
          active={activeTab === "booked"}
          onClick={() => onChangeTab("booked")}
        >
          Booked
        </Tab>
        <Tab
          active={activeTab === "pending"}
          onClick={() => onChangeTab("pending")}
        >
          Pending
        </Tab>
        <Tab
          active={activeTab === "canceled"}
          onClick={() => onChangeTab("canceled")}
        >
          Canceled
        </Tab>
      </Tabs>
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

export default HeaderTabs;
