import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
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
    <form onSubmit={handleSubmit}>
      <input value={name} type='text' onChange={addName}/>
      <input value={phone} type='tel' onChange={addPhone} pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'/>
      <input value={email} type='email' onChange={addEmail}/>
      <input value='Add' type='submit' />
    </form>
  );
};
