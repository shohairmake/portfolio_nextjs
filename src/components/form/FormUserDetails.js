import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
    hello: {
        fontSize: '3em',
        fontWeight: '100',
        letterSpacing: '0.5em',
        '@media (max-width:600px)': {
            fontSize: '2em',
            letterSpacing: '0.1em',
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '80%',
        '& div': {
            marginTop: '36px',
            marginBottom: '16px',
        },
    },
    buttonWrapper: {
        height: '200px',
    },
    button: {
        fontSize: '1.5em',
        fontWeight: '100',
        opacity: '0.7',
        margin: theme.spacing(2),
    },
}))

const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required').max(20),
    lastName: yup.string().required('Last Name is required').max(20),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
})

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
    const classes = useStyles()
    return (
        <>
            <h1 className={classes.hello}>Please Say Hello</h1>
            <Formik
                initialValues={formData}
                onSubmit={(values) => {
                    setFormData(values)
                    nextStep()
                }}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <Form className={classes.form}>
                        <Field
                            name="firstName"
                            label="First Name *"
                            margin="normal"
                            fullWidth={true}
                            as={TextField}
                            error={touched.firstName && errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                        />
                        <Field
                            name="lastName"
                            label="Last Name *"
                            margin="normal"
                            fullWidth={true}
                            as={TextField}
                            error={touched.lastName && errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                        />
                        <Field
                            type="email"
                            name="email"
                            label="Email *"
                            margin="normal"
                            fullWidth={true}
                            as={TextField}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            type="message"
                            name="message"
                            label="message *"
                            margin="normal"
                            as={TextField}
                            multiline={true}
                            rows={5}
                            fullWidth={true}
                            error={touched.message && errors.message}
                            helperText={touched.message && errors.message}
                        />
                        <div className={classes.buttonWrapper}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Continue
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

FormUserDetails.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
}
