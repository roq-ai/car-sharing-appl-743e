import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  description: yup.string().required(),
  car_id: yup.string().nullable().required(),
});
