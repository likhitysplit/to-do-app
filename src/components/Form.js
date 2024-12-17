import React from 'react';
import { useFormik } from 'formik';

function Form({ onFormSubmit, initialValues }) {
  const formik = useFormik({
    initialValues: initialValues || { name: '', email: '', number: '' },
    onSubmit: values => {
      onFormSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="user-form">
      <h2 className="form-title">{initialValues ? 'edit info here!' : 'user info form!'}</h2>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div> 

      <div className="form-group">
        <label htmlFor="number">number</label>
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </div>

      <button type="submit" className="submit-button">submit</button>
    </form>
  );
}

export default Form;
