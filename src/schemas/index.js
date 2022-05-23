import * as yup from 'yup';

const MAX_ALLOWED_CHARACTERS_NAME = 40;
const MAX_ALLOWED_CHARACTERS_OBS = 1000;

export const schema = yup.object().shape({
  name: yup.string().max(MAX_ALLOWED_CHARACTERS_NAME).required(),
  initialDate: yup.date().required(),
  finalDate: yup.date().required(),
  properties: yup.string().required(),
  lab: yup.string().required(),
  obs: yup.string().max(MAX_ALLOWED_CHARACTERS_OBS)
});