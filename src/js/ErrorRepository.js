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

  /**
   * возвращает описание ошибки, исходя из полученного кода
   * @param {number} code цифровой код ошибки
   * @returns описание ошибки
   */
  translate(code) {
    return this.dataErrors.get(code) ?? 'Unknown error';
  }
}
