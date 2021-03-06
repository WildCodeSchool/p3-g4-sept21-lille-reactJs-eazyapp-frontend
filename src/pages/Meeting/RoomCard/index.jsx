import PropTypes from 'prop-types';
import SRoomCard from './style';

export default function RoomCard({
  localisation,
  capacity,
  number,
  equipment,
  picture,
}) {
  return (
    <SRoomCard>
      <h2>Salle de reunion n°{number}</h2>
      <p>{localisation}</p>
      <p>Capacité : {capacity} </p>
      <p>{equipment}</p>
      <img src={picture} alt="Salle de réunion" />
    </SRoomCard>
  );
}

RoomCard.propTypes = {
  localisation: PropTypes.string,
  capacity: PropTypes.number,
  number: PropTypes.number,
  equipment: PropTypes.string,
  picture: PropTypes.string,
};

RoomCard.defaultProps = {
  localisation: '',
  capacity: 0,
  number: PropTypes.number,
  equipment: '',
  picture: '',
};
