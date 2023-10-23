import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  date: any;
  description: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  car_id?: string;
}
