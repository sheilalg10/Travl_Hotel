import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRooms from "./../components/rooms/tableRooms";
import HeaderTabs from "../components/rooms/headerTabs";
import NewRoomModal from '../components/rooms/roomModal';
import { addRoom } from '../redux/roomSlice';

const RoomsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const rooms = useSelector((state) => state.rooms.data);
  const dispatch = useDispatch();

  const handleAddRoom = (room) => {
    dispatch(addRoom(room));
    setShowModal(false);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      const direction =
        prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
  };

  const filteredRooms = rooms
    .filter((room) => {
      const status = room.status?.toLowerCase();
      if (filter === "all") return true;
      return status === filter;
    })
    .slice() // crear copia antes de ordenar
    .sort((a, b) => {
      const { key, direction } = sortConfig;
      if (!key) return 0;

      if (key === "rate") {
        const aRate = parseFloat(a.rate);
        const bRate = parseFloat(b.rate);
        return direction === "asc" ? aRate - bRate : bRate - aRate;
      }

      if (key === "status") {
        const aStatus = a.status.toLowerCase();
        const bStatus = b.status.toLowerCase();
        if (aStatus < bStatus) return direction === "asc" ? -1 : 1;
        if (aStatus > bStatus) return direction === "asc" ? 1 : -1;
        return 0;
      }

      return 0;
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
      <TableRooms
        rooms={filteredRooms}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
    </>
  );
};

export default RoomsPage;
