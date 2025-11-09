'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './ModalForm.module.css';
import emailjs from '@emailjs/browser';
import { useMessages, useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';

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

  const t = useTranslations('modalForm');
  const messages = useMessages();
  const validation = messages.modalForm.validation;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, `${validation.name.min}`)
      .required(`${validation.name.required}`),
    email: Yup.string()
      .email(`${validation.email.email}`)
      .required(`${validation.email.required}`),
    message: Yup.string()
      .min(10, `${validation.message.min}`)
      .required(`${validation.message.required}`),
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
      alert(`✅ ${t('success')}`);
      resetForm();
      setTimeout(() => onClose(), 100);
    } catch (error) {
      console.error('❌ Помилка при відправці:', error);
      alert(`${t('error')}`);
    }
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>{t('title')}</h3>
      <button type="button" onClick={onClose} className={css.close}>
        <IoMdClose size={25} />
      </button>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            {t('name')}
            <Field name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            {t('email')}
            <Field name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>

          <label className={css.label}>
            {t('message')}
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
            {t('button')}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalForm;
