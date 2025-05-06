import React, { useState } from 'react';
import styled from 'styled-components';

const NewRoomModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    roomNumber: '',
    name: '',
    bedType: '',
    roomFloor: '',
    facilities: '',
    rate: '',
    image: '',
    status: 'Available',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newRoom = {
      ...formData,
      facilities: formData.facilities.split(',').map(f => f.trim()),
    };
    onSubmit(newRoom);
  };

  return (
    <Overlay>
      <Modal>
        <Title>New Room</Title>
        <Field name="roomNumber" placeholder="Room Number" onChange={handleChange} />
        <Field name="name" placeholder="Room Name" onChange={handleChange} />
        <Field name="bedType" placeholder="Bed Type" onChange={handleChange} />
        <Field name="roomFloor" placeholder="Room Floor" onChange={handleChange} />
        <Field name="rate" placeholder="Rate" type="number" onChange={handleChange} />
        <Field name="image" placeholder="Image URL or path" onChange={handleChange} />
        <Field name="status" placeholder="Available / Booked" onChange={handleChange} />
        <Field name="facilities" placeholder="Facilities (comma-separated)" onChange={handleChange} />
        <TextArea name="description" placeholder="Description" rows="3" onChange={handleChange} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </Modal>
    </Overlay>
  );
};

export default NewRoomModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Field = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: #004d40;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 1rem;
`;

const CancelButton = styled(Button)`
  background-color: #aaa;
`;