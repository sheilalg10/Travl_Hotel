import styled from 'styled-components';
import { useState } from 'react';
import TableActions from '../components/common/TableActions';
import TableTemplate from '../components/common/TableTemplate'

export default function Users() {

    const [filter, setFilter] = useState("");

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    return (
        <StyledUsers>
            <TableActions onFilter={handleFilter} />
            <TableTemplate filter={filter} />
        </ StyledUsers>
    )
}

const StyledUsers = styled.div`
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