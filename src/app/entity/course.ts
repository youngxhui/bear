import Level from './level';
import {SubTip} from './subTip';
import {Tip} from './tip';

export class Course {

  id: number;

  name: string;

  level: Level;

  teacher: string;

  rate: number;

  catalog: string;

  cover: string;

  description: string;

  enable: boolean;

  institution: string;

  online: boolean;

  period: number;

  subTip: SubTip;

  tip: Tip;

  url: string;

}
