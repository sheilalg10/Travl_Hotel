import styled from 'styled-components';
import Table from '../components/common/Table';

export default function Rooms() {
    
    return (
        <StyledRooms>
            <h3>Rooms</h3>
            <Table/>
        </ StyledRooms>
    )
}

const StyledRooms= styled.div`
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