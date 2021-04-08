import { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useController, Control } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<Record<string, any>>;
  name: string;
  defaultValue: string;
  onChange(): void;
};

const EnhancedSearchText: FC<Props> = ({
  control,
  name,
  defaultValue,
  onChange,
}) => {
  // eslint-disable-next-line
  const { field } = useController({ control, name, defaultValue });

  return (
    <TextField
      id="title"
      label="Title Search"
      type="search"
      defaultValue=""
      onChange={onChange}
    />
  );
};

export default EnhancedSearchText;
