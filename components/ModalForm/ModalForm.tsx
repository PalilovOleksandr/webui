'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './ModalForm.module.css';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const myKey = {
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  serviceID: process.env.NEXT_PUBLIC_SERVICE_ID,
};

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm = ({ onClose }: ModalFormProps) => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
    subject: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Мінімум 2 символи')
      .required("Ім'я є обов'язковим"),
    email: Yup.string()
      .email('Некоректний email')
      .required('Email є обовʼязковим'),
    message: Yup.string()
      .min(10, 'Мінімум 10 символів')
      .required('Введіть повідомлення'),
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await emailjs.send(
        `${myKey.serviceID}`,
        `${myKey.templateId}`,
        {
          user_name: values.name,
          user_email: values.email,
          message: values.message,
        },
        'To8pW1ZPlb5TJqseo'
      );
      alert('✅ Повідомлення успішно відправлено!');
      resetForm();
      setTimeout(() => onClose(), 100);
    } catch (error) {
      console.error('❌ Помилка при відправці:', error);
      alert('Сталася помилка. Спробуйте пізніше.');
    }
  };

  return (
    <div className={css.formWrapper}>
      <h2 className={css.title}>Зв`язатись з нами</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Ім`я
            <Field name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            Повідомлення
            <Field
              as="textarea"
              name="message"
              className={`${css.input} ${css.textarea}`}
            />
            <ErrorMessage
              name="message"
              component="span"
              className={css.error}
            />
          </label>

          <button type="submit" className={css.submitBtn}>
            Відправити
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalForm;
