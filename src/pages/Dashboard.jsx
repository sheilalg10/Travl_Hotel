import styled from 'styled-components';
import CardsDashboard from '../components/dashboard/cards';

export default function Dashboard() {
    
    return (
        <StyledDashboard>
            <CardsDashboard />
        </ StyledDashboard>
    )
}

const StyledDashboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 80vw;
    margin-left: 20vw;
    position: relative;
    padding: 1.5rem;
`;