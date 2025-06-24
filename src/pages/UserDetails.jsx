import styled from "styled-components";
import GuestDetails from "../components/guest/GuestDetails";

export default function UsersDetails() {

    return (
        <StyledUsersDetails>
            <GuestDetails />
        </StyledUsersDetails>
    )
}

const StyledUsersDetails = styled.div`
        display: flex;
        flex-direction: column;  
        justify-content: flex-start;
        width: 77vw;
        margin-left: 20vw;
        margin-top: 50px;
        position: relative;
        gap: 2rem;
        border-radius: 8px;
        overflow: hidden;
        height: 75vh;
        background: #fff;
`;