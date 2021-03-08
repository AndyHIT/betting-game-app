import { useEffect } from 'react';

function EventList(props) {
  const { eventListName, getEventListData } = props;

  useEffect(() => {
    (async () => getEventListData())()
  },[])

  console.log(eventListName);

  const renderEventList = (
    <div>
      {/* {eventListName.map(name => {
        <div>{name}</div>
      })} */}
    </div>
  )

  return renderEventList;
}

export default EventList;