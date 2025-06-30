import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput';
import { Button, Container, Typography } from '@mui/material';

const validationSchema = Yup.object({
    username: Yup.string()
        .min(8, 'Username must be at least 8 characters')
        .required('Username is required'),
});

const UserInformation = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                User Information Form
            </Typography>
            <Formik
                initialValues={{ username: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {() => (
                    <Form>
                        <CustomInput
                            name="username"
                            label="Username"
                            variant="outlined"
                        />

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default UserInformation;
