import { FC, useMemo } from 'react';
import { Genre } from 'API';
import { genres } from 'components/atoms/GenreIcon';
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import {
  Controller,
  UseFormGetValues,
  Control,
  ControllerRenderProps,
} from 'react-hook-form';
import { IFormInputs } from 'containers/templates/MarkdownContentForms';

type Props = {
  control: Control<IFormInputs>;
  getValues: UseFormGetValues<IFormInputs>;
  setHeader: React.Dispatch<React.SetStateAction<File | undefined>>;
};

const ArticleOptionForms: FC<Props> = ({ control, getValues, setHeader }) => {
  const handleSelect = (checkedName: string) => {
    const names = getValues()?.genres;
    const newNames = names?.includes(checkedName)
      ? names?.filter((name) => name !== checkedName)
      : [...(names ?? []), checkedName];

    return newNames;
  };
  const genreList = useMemo(
    () => Object.entries(Genre).map((genre) => genre[0]),
    [],
  );

  const headerInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    cr: ControllerRenderProps<IFormInputs, 'image'>,
  ) => {
    cr.onChange(e);
    if (!e?.target?.files) return;
    const file = e.target.files[0];
    setHeader(file);
  };

  return (
    <div className="meta_forms_container">
      <Controller
        control={control}
        name="title"
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} className="title_form" label="Title" />
        )}
      />
      <Controller
        control={control}
        name="code"
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField {...field} className="code_form" label="Code" />
        )}
      />
      <Controller
        control={control}
        name="image"
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            accept="image/*"
            id="contained-button-file"
            name="image"
            className="image_form"
            multiple
            type="file"
            onChange={(e) => headerInput(e, field)}
          />
        )}
      />
      <Controller
        control={control}
        name="subtitle"
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} label="Subtitle" fullWidth />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="genres"
        render={(fields) => (
          <FormGroup row>
            {genreList.map((genre) => (
              <FormControlLabel
                key={genre}
                value={genre}
                label={genre.toUpperCase()}
                control={
                  <Checkbox
                    value={genre}
                    icon={genres[genre]}
                    checkedIcon={genres[genre]}
                    onChange={() => fields.field.onChange(handleSelect(genre))}
                  />
                }
              />
            ))}
          </FormGroup>
        )}
      />
    </div>
  );
};

export default ArticleOptionForms;