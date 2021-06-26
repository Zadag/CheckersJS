/* eslint-disable no-underscore-dangle */

const playerFactory = (isRed) => {
  const _markersTaken = [];

  const takeMarker = (marker) => {
    _markersTaken.push(marker);
  };

  const checkMarkersTaken = () => _markersTaken.length;

  return {
    isRed,
    takeMarker,
    checkMarkersTaken,
  };
};

export default playerFactory;
