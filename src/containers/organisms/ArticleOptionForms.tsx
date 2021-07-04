import { FC, useMemo } from 'react';
import { Genre } from 'API';
import { genres } from 'components/atoms/GenreIcon';
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Chip,
  Select,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import {
  Controller,
  UseFormGetValues,
  Control,
  ControllerRenderProps,
} from 'react-hook-form';
import { IFormInputs } from 'components/molecules/Modal';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';

type defaultValueType = {
  title: string;
  code: string;
  subtitle: string;
  relation: string[] | null;
  genres: string[];
  tags: string[] | null;
  author: string;
  volume: string;
  magazine: string;
};

type Props = {
  control: Control<IFormInputs>;
  getValues: UseFormGetValues<IFormInputs>;
  setHeader: React.Dispatch<React.SetStateAction<File | undefined>>;
  defaultValue?: defaultValueType;
};
// eslint-disable
const ArticleOptionForms: FC<Props> = ({
  control,
  getValues,
  setHeader,
  defaultValue = {
    title: '',
    code: '',
    subtitle: '',
    genres: [''],
    relation: [],
    tags: [],
    author: '',
    volume: '',
    magazine: '',
  },
}) => {
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
  const articles = useSelector<typeState, Comic[]>(
    (state) => state.allArticles,
    shallowEqual,
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
        defaultValue={defaultValue.title}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} className="title_form" label="Title" />
        )}
      />
      <Controller
        control={control}
        name="code"
        defaultValue={defaultValue.code}
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            disabled={!!defaultValue.code}
            className="code_form"
            label="Code"
          />
        )}
      />
      <Controller
        control={control}
        name="image"
        defaultValue=""
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
        name="author"
        defaultValue={defaultValue.author}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} className="author_form" label="Author" />
        )}
      />
      <Controller
        control={control}
        name="volume"
        defaultValue={defaultValue.volume}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} className="volume_form" label="Volume" />
        )}
      />
      <Controller
        control={control}
        name="magazine"
        defaultValue={defaultValue.magazine}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} className="magazine_form" label="Magazine" />
        )}
      />
      <Controller
        control={control}
        name="subtitle"
        defaultValue={defaultValue.subtitle}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField {...field} label="Subtitle" fullWidth />
        )}
      />
      <Controller
        control={control}
        name="tags"
        defaultValue={defaultValue.tags}
        render={({ field }) => (
          <ChipInput
            onChange={(value) => field.onChange(value)}
            defaultValue={defaultValue.tags ?? []}
            label="Tags"
            fullWidth
            className="tag_chips"
          />
        )}
      />
      <Controller
        control={control}
        name="relation"
        defaultValue={defaultValue.relation}
        render={(fields) => (
          <FormControl fullWidth className="relation_selector">
            <InputLabel id="demo-mutiple-chip-label">Relation</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              multiple
              value={fields.field.value ?? []}
              onChange={fields.field.onChange}
              input={<Input />}
              renderValue={(selected) => (
                <>
                  {(selected as string[]).map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      style={{ margin: 2, padding: 1 }}
                    />
                  ))}
                </>
              )}
            >
              {articles.map(
                (comic) =>
                  comic.code !== defaultValue.code && (
                    <MenuItem key={comic.code} value={comic.code}>
                      {comic.title}
                    </MenuItem>
                  ),
              )}
            </Select>
          </FormControl>
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
                    defaultChecked={defaultValue.genres.includes(genre)}
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
