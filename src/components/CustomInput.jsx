// src/components/CustomInput.jsx
import React from 'react';
import { TextField, FormHelperText } from '@mui/material';
import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div style={{ marginBottom: '1rem' }}>
            <TextField
                fullWidth
                label={label}
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
            />
            {meta.touched && meta.error && (
                <FormHelperText error>{meta.error}</FormHelperText>
            )}
        </div>
    );
};

export default CustomInput;
