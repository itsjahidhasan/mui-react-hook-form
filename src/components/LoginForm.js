import React from "react";
import { TextField, Container, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";


export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: data.title,
        body: data.body,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  async function onSubmitAsync(data) {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: data.title,
          body: data.body,
        }
      );
      console.log(response);
      console.log(watch("title"));
      console.log(watch("body"));
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Container maxWidth="xs">
      <h1>hello</h1>
      <form onSubmit={handleSubmit(onSubmitAsync)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Title"
            fullWidth
            autoComplete="Title"
            autoFocus
            {...register("title", { required: "Required" })}
            error={!!errors?.title}
            helperText={errors?.title ? errors.title.message : null}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="Body"
            fullWidth
            autoComplete="Body"
            autoFocus
            {...register("body", { required: "Required" })}
            error={!!errors?.body}
            helperText={errors?.body ? errors.body.message : null}
          />
        </Box>

        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};
