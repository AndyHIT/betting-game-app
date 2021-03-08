import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventList from './../components/eventList';
import { getEndPointData, setEventListData } from './../actions/event-actions';

const mapStateToProps = (state) => ({
  eventListName: state.events.eventList
});

const mapDispatchToProps = (dispatch) => ({
  getEventListData: () => {
    dispatch(getEndPointData())
  },
  getEventList: (json) => {
    dispatch(setEventListData(json))
  }
});

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventListContainer;