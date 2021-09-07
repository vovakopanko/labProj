const HandleScroll = ({event, setPause}: any) => {
  const positionY = event.nativeEvent.contentOffset.y;
  if (positionY >= 0 && positionY < 399) {
    setPause(true);
  } else if (positionY >= 400 && positionY <= 600) {
    setPause(false);
  } else if (positionY > 601) {
    setPause(true);
  }
};

export default HandleScroll;
