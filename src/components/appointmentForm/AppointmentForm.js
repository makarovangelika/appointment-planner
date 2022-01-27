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
  handleSubmit
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
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={addTitle} />
      <input type='date' value={date} onChange={addDate} />
      <input min={getTodayString()} type='time' value={time} onChange={addTime} />
      <ContactPicker contacts={contacts} onChange={chooseContact} />
      <input type='submit' value='Add'/>
    </form>
  );
};
