import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema  = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .required("Обов'язково"),
    number: Yup.string()
      .min(9, "Мінімум 9 символів")
      .required("Обов'язково"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      orderSchema ={orderSchema }
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.input} name="name" />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.input} name="number" />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button className={s.buttonForm} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;