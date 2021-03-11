import { connect } from 'react-redux';
import SideDrawer from '../components/sideDrawer';
import { removeBetToCart } from '../actions/event-actions';

const mapStateToProps = (state) => ({
  cartList: state.carts.cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeBetToCart: (eventId, gameId, price) => {
    dispatch(removeBetToCart(eventId, gameId, price))
  }
});

const SideDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);

export default SideDrawerContainer;