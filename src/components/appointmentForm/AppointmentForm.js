import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const addTitle = ({target}) => {
    setTitle(target.value);
  }
  const addDate = ({target}) => {
    setDate(target.value);
  }
  const addTime = ({target}) => {
    setTime(target.value);
  }
  const chooseContact = ({target}) => {
    setContact(target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={title}
        onChange={addTitle}
        name='title'
        required
        placeholder='Appointment title' />
      <input
        type='date'
        name='date'
        value={date}
        onChange={addDate}
        min={getTodayString()}
        required />
      <input
        type='time'
        name='time'
        value={time}
        onChange={addTime}
        required />
      <ContactPicker
        value={contact}
        name='contact'
        placeholder='Appointment with'
        contacts={contacts}
        onChange={chooseContact} />
      <input type='submit' value='Add'/>
    </form>
  );
};
