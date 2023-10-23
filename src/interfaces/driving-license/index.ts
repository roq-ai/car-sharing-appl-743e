import { GetQueryInterface } from 'interfaces';

export interface DrivingLicenseInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DrivingLicenseGetQueryInterface extends GetQueryInterface {
  id?: string;
}
