import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { deleteReservation } from '../redux/reservations/reservationsReducer';

function ReservationCard(props) {
  const dispatch = useDispatch();
  const { reservation } = props;

  const cars = useSelector((state) => state.carsReducer);
  const user = useSelector((state) => state.userReducer);
  const reservedCar = cars
    .filter((car) => car.id === reservation.car_id && reservation.username === user);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
    window.location.reload(false);
  };

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
        <div>
          Reservation  ID :
          {uniqueId()}
        </div>
      </div>
      <div className="reservation-details">

        <div className="reservation-date-details">
          <div className="dates">
            Pick-up :
            {' '}
            {reservation.fromDate}
          </div>
          <div className="dates">
            Drop-off :
            {' '}
            {reservation.toDate}
          </div>
          <div className="dates">
            Number of days :
            {' '}
            {datediff(reservation.fromDate, reservation.toDate)}
            {}
          </div>

        </div>
        <img className="car-image" src={`${reservedCar[0].image}`} alt="" />
        <div className="reservation-car-details">
          <div>
            Car brand :
            {' '}
            {reservedCar[0].brand}
          </div>
          <div>
            Car Model :
            {' '}
            {reservedCar[0].model}
          </div>

          {reservedCar[0].description && (
          <div>
            Car brand :
            {' '}
            {' '}
            {reservedCar[0].description}
          </div>
          )}

          <div>
            Total price ($) :
            {' '}
            {parseInt(reservedCar[0].price, 10)
             * datediff(reservation.fromDate, reservation.toDate)}
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
    fromDate: propTypes.string.isRequired,
    toDate: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    car_id: propTypes.number,
  }),
};

ReservationCard.defaultProps = {
  reservation: {},
};

export default ReservationCard;
