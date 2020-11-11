export default class Result<T> {
  code: number;
  message: string;
  data: T;

  constructor(code: number = 200, message: string = 'success', data: T = null) {
  }
}
