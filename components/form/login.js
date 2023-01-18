import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatória')
});

function LoginForm() {
        
    return (
        <>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
        {({ errors, touched }) => (
            <Form className='form'>
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
    </>
    );
}

export default LoginForm