import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput, MyCheckbox, MySelect } from '../components'

export const FormikAbstract = () => {
  return (
    <div>
      <h1>FormikAbstract</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El email no es valido')
            .required('Requerido'),
          terms: Yup.boolean().oneOf(
            [true],
            'Debe de aceptar las condiiciones'
          ),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Requerido')
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='First Name'
            />

            <MyTextInput
              name='lastName'
              label='Last Name'
              placeholder='Last Name'
            />

            <MyTextInput
              type='email'
              name='email'
              label='Email'
              placeholder='Email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </MySelect>

            <MyCheckbox label={'Terms and conditions'} name={'terms'} />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}