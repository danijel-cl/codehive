import { CompanyType } from "./CompanyType";

export interface PostType {
  id: number;
  company: CompanyType;
  experience: string;
  description: string;
  position: string;
}
