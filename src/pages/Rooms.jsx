import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRooms from "./../components/rooms/tableRooms";
import HeaderTabs from "../components/rooms/headerTabs";
import NewRoomModal from '../components/rooms/roomModal';
import { addRoom } from '../redux/roomSlice';
import styled from "styled-components";

const RoomsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const rooms = useSelector((state) => state.rooms.data);
  const dispatch = useDispatch();

  const handleAddRoom = (room) => {
    dispatch(addRoom(room));
    setShowModal(false);
  };

  const filteredRooms = rooms.filter((room) => {
    if (filter === "all") return true;
    return room.status.toLowerCase() === filter;
  });

  return (
    <>
      <HeaderTabs
        activeTab={filter}
        onChangeTab={setFilter}
        onNewRoom={() => setShowModal(true)}
      />
      {showModal && (
        <NewRoomModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddRoom}
        />
      )}
      <TableRooms rooms={filteredRooms} />
    </>
  );
};

export default RoomsPage;

const StyledRooms = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80vw;
  margin-left: 20vw;
  overflow-y: scroll;
  position: relative;
  gap: 2rem;
`;
