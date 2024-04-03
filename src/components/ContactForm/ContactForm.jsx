import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import FormInput from '../FormInput/FormInput';
import css from './ContactForm.module.css';

const phoneRegExp = /^[0-9]{3}[ \\-][0-9]{3}[ \\-][0-9]{4}$/;

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required, please insert the name'),
    number: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .matches(phoneRegExp, 'Phone number format is 111-111-1111')
      .required('Required, please insert the number'),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <FormInput
          id={nameFieldId}
          type="text"
          name="name"
          placeholder="Enter name"
        >
          Name
        </FormInput>

        <FormInput
          id={numberFieldId}
          type="text"
          name="number"
          placeholder="111-111-1111"
        >
          Number
        </FormInput>

        <button className={css.formBtn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
