import React from 'react';
import { TextField, Container, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container maxWidth="xs">
      <h1>hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            autoComplete="Email"
            autoFocus
            {...register('email', { required: 'Required' })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>

        <Button type="submit" variant="contained" fullWidth>
          Log In
        </Button>
      </form>
    </Container>
  );
};
