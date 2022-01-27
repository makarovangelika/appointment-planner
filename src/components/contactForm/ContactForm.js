import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onSubmit
}) => {
  const addName = ({target}) => {
    setName(target.value);
  }
  const addPhone = ({target}) => {
    setPhone(target.value);
  }
  const addEmail = ({target}) => {
    setEmail(target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={name}
        name='name'
        type='text'
        onChange={addName}
        placeholder='Contact name'
        required />
      <input
        value={phone}
        name='phone'
        type='tel'
        required
        onChange={addPhone}
        placeholder='Contact Phone (###-###-####)'
        pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' />
      <input
        value={email}
        type='email'
        name='email'
        onChange={addEmail}
        placeholder='Contact Email'
        required />
      <input value='Add' type='submit' />
    </form>
  );
};
