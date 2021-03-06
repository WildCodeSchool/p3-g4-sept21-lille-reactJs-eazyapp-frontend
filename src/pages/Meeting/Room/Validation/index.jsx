import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import SValidation from './style';
import ValidationPopup from './ValidationPopup';
import Slot from './Slot';

SwiperCore.use([Navigation]);

const today = new Date();
const days = [];

const slotsDisplay = [
  { slotHour: 8, slotDisplay: '8h-9h' },
  { slotHour: 9, slotDisplay: '9h-10h' },
  { slotHour: 10, slotDisplay: '10h-11h' },
  { slotHour: 14, slotDisplay: '14h-15h' },
  { slotHour: 15, slotDisplay: '15h-16h' },
  { slotHour: 16, slotDisplay: '16h-17h' },
];

for (let i = 0; i < 7; i += 1) {
  const dayDate = new Date();
  dayDate.setDate(today.getDate() + i + 1);
  const dayDisplay = dayDate.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const slots = [];
  for (let j = 0; j < slotsDisplay.length; j += 1) {
    const { slotDisplay } = slotsDisplay[j];
    const slotTime = dayDate.setHours(slotsDisplay[j].slotHour, 0, 0);
    slots.push({ slotDisplay, slotTime });
  }
  days.push({ display: dayDisplay, dayDate, slots });
}
export default function Validation({
  setAlreadyBooked,
  setValidation,
  reservation,
  setReservation,
  setShare,
}) {
  const { id } = useParams();
  const [validationPopup, setValidationPopup] = useState(false);
  const [dataRoom, setDataRoom] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meetingRoom/${id}`)

      .then(({ data }) => {
        setDataRoom(data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <SValidation>
      <img className="room" src={dataRoom.picture} alt="Salle de réunion" />
      <h2>Salle de réunion n°{dataRoom.number}</h2>
      <Swiper navigation className="mySwiper">
        {days.map((day) => {
          return (
            <SwiperSlide key={day.display}>
              <h3 className={day.dayDate.getDay() === 0 ? 'disabled' : null}>
                {day.display}
              </h3>
              <div className="slots">
                {day.slots.map((slot) => {
                  return (
                    <Slot
                      isSunday={day.dayDate.getDay() === 0}
                      key={slot.slotTime}
                      slot={slot}
                      setAlreadyBooked={setAlreadyBooked}
                      setReservation={setReservation}
                      setValidation={setValidation}
                      setValidationPopup={setValidationPopup}
                      roomPicture={dataRoom.picture}
                    />
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {validationPopup && (
        <ValidationPopup
          validationPopup={validationPopup}
          setValidationPopup={setValidationPopup}
          setValidation={setValidation}
          reservation={reservation}
          setShare={setShare}
        />
      )}
    </SValidation>
  );
}

Validation.propTypes = {
  setAlreadyBooked: propTypes.func,
  setValidation: propTypes.func,
  reservation: propTypes.shape({
    room: propTypes.number,
    roomId: propTypes.number,
    slot: propTypes.string,
    userFirstname: propTypes.string,
    userLastname: propTypes.string,
    userPicture: propTypes.string,
    roomPicture: propTypes.string,
  }),
  setReservation: propTypes.func,
  setShare: propTypes.func,
};

Validation.defaultProps = {
  setAlreadyBooked: () => {},
  setValidation: () => {},
  reservation: null,
  setReservation: () => {},
  setShare: () => {},
};
