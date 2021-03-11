import { connect } from 'react-redux';
import EventList from './../components/eventList';
import { getEndPointData, setEventListData, addBetToCart, removeBetToCart } from './../actions/event-actions';

const mapStateToProps = (state) => ({
  eventList: state.events.eventList,
  cartList: state.carts.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getEventListData: () => {
    dispatch(getEndPointData())
  },
  getEventList: (json) => {
    dispatch(setEventListData(json))
  },
  addBetToCart: (eventId, gameId, gameName, price, optionName) => {
    dispatch(addBetToCart(eventId, gameId, gameName, price, optionName))
  },
  removeBetToCart: (eventId, gameId, price) => {
    dispatch(removeBetToCart(eventId, gameId, price))
  }
});

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventListContainer;