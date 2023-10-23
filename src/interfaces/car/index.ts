import { BookingInterface } from 'interfaces/booking';
import { MaintenanceInterface } from 'interfaces/maintenance';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  manufacturer: string;
  year_of_manufacture: number;
  mileage: number;
  color: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  maintenance?: MaintenanceInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
    maintenance?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  manufacturer?: string;
  color?: string;
  user_id?: string;
}
