import { FC } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import { UseFormHandleSubmit, Controller, Control } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export type IFormInputs = {
  title: string;
  code: string;
  owner: string;
  subtitle: string;
  content: string;
  image: string;
  isPublic: boolean;
  isHot: boolean;
  relation: string[];
  tags: string[];
  like: number;
  genres: string[];
  author: string;
  volume: string;
  magazine: string;
};

type defaultValueType = {
  isPublic: boolean;
  isHot: boolean;
};

type Props = {
  onClose: () => void;
  open: boolean;
  handleSubmit: UseFormHandleSubmit<IFormInputs>;
  // onSubmit: (data: IFormInputs) => Promise<void>;
  onSubmit: (data: IFormInputs) => void;
  control: Control<IFormInputs>;
  defaultValue?: defaultValueType;
};

const ConfirmModal: FC<Props> = ({
  onClose,
  open,
  handleSubmit,
  onSubmit,
  control,
  defaultValue = { isPublic: false, isHot: false },
}) => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className="modal"
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="paper">
          <h2 id="transition-modal-title">Do you want to submit?</h2>
          <Controller
            control={control}
            name="isPublic"
            defaultValue={defaultValue.isPublic}
            render={(fields) => (
              <FormControlLabel
                label="公開"
                control={
                  <Checkbox
                    value={fields.field.value}
                    defaultChecked={defaultValue.isPublic}
                    onChange={fields.field.onChange}
                    color="primary"
                  />
                }
              />
            )}
          />
          <Controller
            control={control}
            name="isHot"
            defaultValue={defaultValue.isHot}
            render={(fields) => (
              <FormControlLabel
                label="おすすめ"
                control={
                  <Checkbox
                    value={fields.field.value}
                    defaultChecked={defaultValue.isHot}
                    onChange={fields.field.onChange}
                    color="primary"
                  />
                }
              />
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Fade>
  </Modal>
);

export default ConfirmModal;
