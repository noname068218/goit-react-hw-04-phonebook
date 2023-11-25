import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './QuizStyle';
// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

const quizShema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too Short!').required('Required'),
  level: Yup.string().oneOf(['beginner', 'intermediate', 'advanced']),
  time: Yup.number().min(10, 'Must be 10 or more').required('Required'),
  questions: Yup.number().min(3, 'Must be 3 or more').required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          topic: '',
          level: 'beginner',
          time: 0,
          questions: 0,
        }}
        validationSchema={quizShema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Topic
            <Field name="topic" />
            <ErrorMessage name="topic" component="span" />
          </label>
          <label>
            Time
            <Field type="number" name="questions" />
            <ErrorMessage name="questions" component="span" />
          </label>
          <label>
            Questions
            <Field type="number" name="time" />
            <ErrorMessage name="time" component="span" />
          </label>
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
            <option value="intermediate">Intermediate</option>
          </Field>
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
