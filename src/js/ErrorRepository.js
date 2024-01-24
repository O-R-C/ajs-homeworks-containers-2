/**
 * хранилище ошибок
 * @class
 */
export default class ErrorRepository {
  /**
   * создает хранилище ошибок
   * @param {Array} dataErrors массив ошибок
   */
  constructor(dataErrors = []) {
    this.dataErrors = new Map(dataErrors);
  }

  translate(code) {
    return this.dataErrors.get(code) ?? 'Unknown error';
  }
}
