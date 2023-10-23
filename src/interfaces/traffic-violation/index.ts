import { GetQueryInterface } from 'interfaces';

export interface TrafficViolationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TrafficViolationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
