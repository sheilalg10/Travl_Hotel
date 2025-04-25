import styled from 'styled-components';

export default function User() {
    
    return (
        <StyledUser>
            <h3>Clients</h3>
        </ StyledUser>
    )
}

const StyledUser= styled.div`
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