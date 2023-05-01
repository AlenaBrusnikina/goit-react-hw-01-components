export const setBgColor = ({eventIsOnline}) => {
    switch (eventIsOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  };
  