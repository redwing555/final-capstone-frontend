import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { deleteReservation } from '../redux/reservations/reservationsReducer';
import './ReservationCard.css';

function ReservationCard(props) {
  const dispatch = useDispatch();
  const { reservation, reservedCar } = props;

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
    window.location.reload(false);
  };
  reservation.reservation_date = reservation.reservation_date.substr(0, 10);
  reservation.to_date = new Date(reservation.to_date).toISOString().split('T').toString()
    .substr(0, 10);

  const datediff = (from, to) => Math.floor((Date.parse(to) - Date.parse(from)) / 86400000);
  const chars = 'A1B2C3D4E5F6G7H8J9K0MNPQRSTUXY';
  const uniqueId = () => {
    let text = '';
    for (let i = 0; i < 10; i += 1) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  return (

    <section className="reservation-card">

      <div className="reservation-header">
        <div>
          Thank you
          {' '}
          {reservation.username.toUpperCase()}
          {' '}
          your car has been reserved!
        </div>
        <div className="reserve-id">
          City:
          {' '}
          {reservation.city}
        </div>
        <div className="reserve-id">
          Reservation  ID :
          {uniqueId()}
        </div>
      </div>
      <div className="reservation-details">

        <div className="reservation-date-details">
          <div className="dates">
            Pick-up :
            {' '}
            {reservation.reservation_date}
          </div>
          <div className="dates">
            Drop-off :
            {' '}
            {reservation.to_date}
          </div>
          <div className="dates">
            Number of days :
            {' '}
            {datediff(reservation.reservation_date, reservation.to_date)}
            {}
          </div>

        </div>
        <img className="car-image" src={`${reservedCar[0] && reservedCar[0].image}`} alt="" />
        <div className="reservation-car-details">
          <div>
            Car brand :
            {' '}
            {reservedCar[0] && reservedCar[0].brand}
          </div>
          <div>
            Car Model :
            {' '}
            {reservedCar[0] && reservedCar[0].model}
          </div>

          {reservedCar[0] && (reservedCar[0].description && (
          <div>
            description :
            {' '}
            {' '}
            {reservedCar[0].description}
          </div>
          ))}

          <div>
            Total rent price ($) :
            {' '}
            {reservedCar[0] && parseInt(reservedCar[0].price, 10)
             * datediff(reservation.reservation_date, reservation.to_date)}

          </div>

          <button onClick={() => handleDelete(reservation.id)} className="cancel-button" type="button">Cancel</button>

        </div>

      </div>

    </section>
  );
}

ReservationCard.propTypes = {
  reservation: propTypes.shape({
    id: propTypes.number.isRequired,
    reservation_date: propTypes.string.isRequired,
    to_date: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    car_id: propTypes.number,
    city: propTypes.string,
  }),
  reservedCar: propTypes.instanceOf(Array),
};

ReservationCard.defaultProps = {
  reservation: {},
  reservedCar: [],
};

export default ReservationCard;
