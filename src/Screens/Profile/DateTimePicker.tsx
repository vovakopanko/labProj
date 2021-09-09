import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePicker = ({inputHandler, setOpen, open}: any) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <DateTimePickerModal
      isVisible={open}
      mode="date"
      onConfirm={userDate => {
        setOpen(false);
        console.log(userDate);
        inputHandler(
          `${userDate.getDate()} ${
            monthNames[userDate.getMonth()]
          } ${userDate.getFullYear()}`,
          'bithdayDate',
        );
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
};

export default DateTimePicker;
