import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type DateTimePicker = {
  setBirthdayDate: (nameUser: string) => void;
  setOpen: any;
  open: boolean;
};

const monthNames: string[] = [
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

const DateTimePicker = ({setBirthdayDate, setOpen, open}: DateTimePicker) => {
  return (
    <DateTimePickerModal
      isVisible={open}
      mode="date"
      onConfirm={userDate => {
        setOpen(false);
        setBirthdayDate(
          `${userDate.getDate()} ${
            monthNames[userDate.getMonth()]
          } ${userDate.getFullYear()}`,
        );
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
};

export default DateTimePicker;
