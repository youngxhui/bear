import {SubTip} from './subTip';
import Level from './level';
import {Tip} from './tip';

export class ShowCourse {
  id: number;

  name: string;

  cover: string;

  tip: Tip;

  subTipId: SubTip;

  description: string;

  institution: string;

  level: Level = new Level();

  catalog: string;

  url: string;

  period: number;

  teacher: string;

  online: boolean;

  rate: number;

  enable: boolean;
}
