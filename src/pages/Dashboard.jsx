import styled from 'styled-components';
import { useState } from 'react';
import Cards from '../components/dashboard/Cards';
import Calendar from '../components/dashboard/Calendar';
import ListBooking from '../components/dashboard/ListBooking';

export default function Dashboard() {

    const [selectedDay, setSelectedDay] = useState(new Date());

    return (
        <StyledDashboard>
            <Cards />
            <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay}  />
            <ListBooking selectedDay={selectedDay} />
        </ StyledDashboard>
    )
}

const StyledDashboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 84vw;
    height: 87vh;
    margin-left: 16vw;
    overflow-y: scroll;
    position: relative;
    padding: 2rem;
`;