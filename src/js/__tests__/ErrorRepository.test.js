import data from '../data';
import ErrorRepository from '../ErrorRepository';

describe('create new ErrorRepository', () => {
  test('correct dataErrors', () => {
    const errorRepository = new ErrorRepository(data);

    const expected = new Map([
      [1, 'error'],
      [2, 'some error'],
      [3, 'big error'],
      [4, 'KA-BooM'],
    ]);

    expect(errorRepository.dataErrors).toEqual(expected);
  });

  test('create with []', () => {
    const errorRepository = new ErrorRepository();

    const expected = new Map([]);

    expect(errorRepository.dataErrors).toEqual(expected);
  });
});
