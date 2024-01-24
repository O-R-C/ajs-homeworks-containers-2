import data from '../data';
import ErrorRepository from '../ErrorRepository';

describe('create new ErrorRepository', () => {
  test('correct dataErrors', () => {
    const errorRepository = new ErrorRepository(data);

    const expected = new Map(data);

    expect(errorRepository.dataErrors).toEqual(expected);
  });

  test('create with []', () => {
    const errorRepository = new ErrorRepository();

    const expected = new Map([]);

    expect(errorRepository.dataErrors).toEqual(expected);
  });
});

describe('test translate(code)', () => {
  const errorRepository = new ErrorRepository(data);

  describe('correct code', () => {
    test.each(data)('%p', (code, error) => {
      expect(errorRepository.translate(code)).toBe(error);
    });
  });

  describe('unknown code', () => {
    test.each(data)(`%p + 10`, (code) => {
      expect(errorRepository.translate(code + 10)).toBe('Unknown error');
    });
  });
});
