/**
 * 登录用户信息
 */
import Authority from './authority';

export default class Auth {
  sub: string;
  id: number;
  username: string;
  account: string;
  authorities: Array<Authority> = new Array<Authority>();
}
