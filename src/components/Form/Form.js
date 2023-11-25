import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, FromStyle, FormGroup, FormButton } from './From.style';

const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Exemple 333-33-33')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={quizSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <FormGroup>
            <label htmlFor="name"></label>
            <FromStyle name="name" id="name" placeholder="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="number"></label>
            <FromStyle
              type="tel"
              name="number"
              id="number"
              placeholder="number"
            />
            <ErrorMessage name="number" component="span" />
          </FormGroup>
          <FormButton type="submit">Add</FormButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
