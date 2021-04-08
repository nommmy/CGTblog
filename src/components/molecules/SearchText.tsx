import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const SearchText: FC = () => {
  const { handleSubmit, control } = useForm();
  type formInput = {
    title: string;
  };
  const onSubmit = (data: formInput) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  };

  return (
    <form
      className="search_form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="title"
        render={({ field }) => (
          <TextField
            id="title"
            label="Title Search"
            type="search"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
          />
        )}
        control={control}
        defaultValue=""
      />
      {/* <Button type="submit" variant="contained" color="primary">
        submit
      </Button> */}
    </form>
  );
};

export default SearchText;
