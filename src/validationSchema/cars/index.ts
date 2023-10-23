import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  year_of_manufacture: yup.number().integer().required(),
  mileage: yup.number().integer().required(),
  color: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
