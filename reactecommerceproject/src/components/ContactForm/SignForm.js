import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';



const SignForm = () => {
    return (
        <>
    <FormLabel component="legend" mt={1} mb={1} color="primary">Please answer these questions about your sign order!</FormLabel>
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={6}>
            <Field
            fullWidth
            required
            name="height"
            component={TextField}
            type="text"
            label="Height"
            />
        </Grid>
    <Grid item xs={6}>
        <Field
            fullWidth
            required
            name="width"
            component={TextField}
            type="text"
            label="Width"
        />
    </Grid>
    <Grid item xs={12}>
        <Field
            name="material"
            fullWidth
            required
            component={TextField}
            type="material"
            label="Material"
        />
    </Grid>                
    <Grid item xs={12}>
        <Field
            name="description"
            fullWidth            
            multiline
            rowsMax={6}
            required
            component={TextField}
            type="description"
            label="Description of Sign"
        />                
    </Grid>
                
        </Grid>
        </>
    )
}

export default SignForm;