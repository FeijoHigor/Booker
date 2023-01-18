import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Nome é obrigatório')
        .min(4, 'O nome deve ter no mínimo 4 caracteres'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

function SignupForm() {
        
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="Nome" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}

          <Field name="email" placeholder="E-mail" />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}

          <Field name="password" type="password" placeholder="Senha" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}

          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
    );
}

export default SignupForm