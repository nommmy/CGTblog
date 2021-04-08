/*
watchの挙動がわからんから一旦保留

onChangeは動いてるし、reducerへの命令も言ってるんだけど、watchでとった値が常に空文字になる。
紐付けができてないみたいな感じだと思うけど
色々試したけど、紐付けの仕方がわからん！以上!
*/

import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { articleListSlice } from 'features/articleList';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';

const SearchText: FC = () => {
  // eslint-disable-next-line
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      title: '',
    },
    mode: 'onChange',
  });
  // eslint-disable-next-line
  const searchWatch = watch("title", "w");
  // eslint-disable-next-line
  const { textSearch } = articleListSlice.actions;
  // eslint-disable-next-line
  const dispatch = useDispatch();

  return (
    <form className="search_form" noValidate autoComplete="off">
      <Controller
        control={control}
        name="title"
        render={() => (
          <TextField
            id="title"
            label="Title Search"
            type="search"
            defaultValue=""
            onChange={() => {
              // eslint-disable-next-line
              console.log(searchWatch);
              dispatch(textSearch(searchWatch));
            }}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   // eslint-disable-next-line
            //   console.log(e.target.value);
            //   dispatch(textSearch(e.target.value));
            // }
            // }
            // eslint-disable-next-line react/jsx-props-no-spreading
          />
        )}
        defaultValue=""
      />
    </form>
  );
};

export default SearchText;
