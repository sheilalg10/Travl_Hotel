import styled from "styled-components";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function RoomForm({ onClose }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const facilities = e.target.querySelectorAll(
      'input[name="facilities"]:checked'
    );
    const facilitiesValues = Array.from(facilities).map(
      (f) => (f as HTMLInputElement).value
    );

    const roomData = {
      roomNumber: "#000000223",
      name: e.target["roomName"].value,
      bedType: e.target["bedType"].value,
      roomFloor: e.target["roomFloor"].value,
      facilities: facilitiesValues,
      rate: e.target["rate"].value,
      image: "/assets/images/room01.jpg",
      status: "Available",
      description: e.target["description"].value,
    };

    axios
      .post("http://localhost:3000/api/rooms", roomData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Room creado:", res.data);
        onClose();
      })
      .catch((error) => {
        console.log("Error al agregar room:", error);
      });
  };

  return (
    <StyledRoomForm>
      <form onSubmit={handleSubmit}>
        <p className="closebtn" onClick={onClose}>
          X
        </p>
        <h2>{t("form.Add Room")}</h2>
        <div>
          <input
            type="text"
            name="roomName"
            id="roomName"
            placeholder=" "
            required
          />
          <label htmlFor="roomName">{t("form.Room Name")}</label>
        </div>
        <div>
          <select name="bedType" id="BedType" required>
            <option value="" disabled selected>
              {t("form.Bed Type")}
            </option>
            <option value="single">{t("form.Single Bed")}</option>
            <option value="double">{t("form.Double Bed")}</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="roomFloor"
            id="roomFloor"
            placeholder=" "
            required
          />
          <label htmlFor="roomFloor">{t("form.Room Floor")}</label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" id="AC" name="facilities" value="AC" />{" "}
            {t("form.AC")}
          </label>
          <label>
            <input
              type="checkbox"
              id="Shower"
              name="facilities"
              value="Shower"
            />{" "}
            {t("form.Shower")}
          </label>
          <label>
            <input
              type="checkbox"
              id="Double Bed"
              name="facilities"
              value="Double Bed"
            />{" "}
            {t("form.Double Bed")}
          </label>
          <label>
            <input type="checkbox" id="Towel" name="facilities" value="Towel" />{" "}
            {t("form.Towel")}
          </label>
          <label>
            <input
              type="checkbox"
              id="Bathup"
              name="facilities"
              value="Bathup"
            />{" "}
            {t("form.Bathup")}
          </label>
          <label>
            <input
              type="checkbox"
              id="Coffe Set"
              name="facilities"
              value="Coffe Set"
            />{" "}
            {t("form.Coffe Set")}
          </label>
          <label>
            <input type="checkbox" id="Wifi" name="facilities" value="Wifi" />{" "}
            {t("form.Wifi")}
          </label>
          <label>
            <input
              type="checkbox"
              id="Balcony"
              name="facilities"
              value="Balcony"
            />{" "}
            {t("form.Balcony")}
          </label>
        </div>
        <div>
          <input type="number" name="rate" id="rate" placeholder=" " required />
          <label htmlFor="rate">{t("form.Rate")}</label>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            placeholder=" "
            required
          />
          <label htmlFor="description">{t("form.Description")}</label>
        </div>
        <div>
          <input type="submit" id="Submit" value={t("form.Add Room")} />
        </div>
      </form>
    </StyledRoomForm>
  );
}

const StyledRoomForm = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--overlay-back);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;

  form {
    background: var(--white);
    padding: 4rem 8rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    position: relative;

    .closebtn {
      position: absolute;
      right: 4rem;
      top: 2rem;
      cursor: pointer;
      font-weight: 900;
      font-size: 1.5rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    div {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      width: 100%;

      label {
        position: absolute;
        left: 8px;
        pointer-events: none;
        top: 4px;
      }

      input {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid var(--overlay-back);
      }

      select {
        width: 100%;
        padding: 4px 8px;
        font-size: 1rem;
        font-family: poppins;
        border-radius: 4px;
      }

      textarea {
        resize: none;
        width: 100%;
        padding: 4px 8px;
        font-size: 1rem;
        font-family: poppins;
        line-height: 1.5;
      }
    }

    .checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border: 1px solid var(--pending-text);
      padding: 2rem;
      max-width: 50vw;
      flex-wrap: wrap;
      border-radius: 4px;

      label {
        position: relative;
        font-size: 1rem;
      }

      input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        padding: 6px;
        border: 2px solid var(--pending-text);
        border-radius: 4px;
        cursor: pointer;
        pointer-events: all;
        position: relative;
        transition: background 0.2s ease-in-out;
      }

      input[type="checkbox"]:checked {
        background-color: #2ecc71;
        border-color: #2ecc71;
      }

      input[type="checkbox"]:checked::after {
        content: "✔";
        color: white;
        position: absolute;
        top: -3px;
        left: 2px;
        font-size: 0.9rem;
      }
    }

    input:focus + label,
    input:not(:placeholder-shown) + label,
    textarea:focus + label,
    textarea:not(:placeholder-shown) + label {
      opacity: 0;
    }

    input[type="submit"] {
      width: 40%;
      margin: 12px auto;
      padding: 12px;
      color: var(--white);
      border: none;
      background: var(--room-available);
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 4px var(--black);
      }
    }
  }
`;
