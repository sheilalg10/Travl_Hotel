import styled from 'styled-components';
import { useState } from 'react';
import TableActions from '../components/common/TableActions';
import TableTemplate from '../components/common/TableTemplate'
import FormRoom from '../components/rooms/FormRoom';

export default function Rooms() {

    const [formActive, setFormActive] = useState(false);
    const [filter, setFilter] = useState("");
    
    const handleAddClick = () => {
        setFormActive(true);
    };

    const handleFilter = (filter) => {
        setFilter(filter);
    };
    
    return (
        <StyledRooms>
            <TableActions onAddClick={handleAddClick} onFilter={handleFilter} />
            <TableTemplate filter={filter} />
            {formActive && <FormRoom onClose={() => setFormActive(false)} />}
        </ StyledRooms>
    )
}

const StyledRooms = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: flex-start;
    width: 84vw;
    margin-left: 16vw;
    overflow-y: scroll;
    position: relative;
    gap: 2rem;
    height: 80vh;
`;