import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  headquarters_location?: string;
  company_type?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  headquarters_location?: string;
  company_type?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
