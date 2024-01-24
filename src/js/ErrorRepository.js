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
}
