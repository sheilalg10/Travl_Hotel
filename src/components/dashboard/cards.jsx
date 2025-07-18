import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { MdOutlineBed } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";

export default function Cards() {

    const { t } = useTranslation();

    return (
        <StyledCardDashboard>
            <div className="card">
                <div className="iconCard">
                    <MdOutlineBed className="icon" />
                </div>
                <div className="info">
                    <h3>8,461</h3>
                    <p>{t("dashboard.New Bookings")}</p>
                </div>
            </div>

            <div className="card">
                <div className="iconCard solidIcon">
                    <CiCalendarDate className="icon solidIcon" />
                </div>
                <div className="info">
                    <h3>963</h3>
                    <p>{t("dashboard.Scheduled Room")}</p>
                </div>
            </div>

            <div className="card">
                <div className="iconCard">
                    <LuArrowLeftToLine className="icon" />
                </div>
                <div className="info">
                    <h3>753</h3>
                    <p>{t("dashboard.Check In")}</p>
                </div>
            </div>

            <div className="card">
                <div className="iconCard">
                    <LuArrowRightToLine className="icon" />
                </div>
                <div className="info">
                    <h3>516</h3>
                    <p>{t("dashboard.Check Out")}</p>
                </div>
            </div>
        </StyledCardDashboard>
    )
}

const StyledCardDashboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    .card {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 30px;
        background: var(--white);
        min-width: 340px;
        gap: 32px;
        box-shadow: 0 12px 12px var(--shadows);
        border-radius: 8px;

        .iconCard {
            background: var(--secondary-color-light);
            width: 65px;
            height: 65px;
            border-radius: 8px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &.solidIcon {
                background: var(--secondary-color);
            }

            .icon {
                transform: scale(2);
                color: var(--secondary-color);
                margin-left: 25px;

                &.solidIcon {
                    color: var(--white);
                }
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 4px;

            p {
                font-size: .8rem;
                opacity: .7;
            }
        }
    }
`;