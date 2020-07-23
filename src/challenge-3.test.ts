import { stringify } from './challenge-3';

describe('stringify tests', () => {
  test('boolean', () => {
    expect(stringify(false)).toEqual(JSON.stringify(false));
  });
  test('number int', () => {
    expect(stringify(3)).toEqual(JSON.stringify(3));
  });
  test('number float', () => {
    expect(stringify(3.14159)).toEqual(JSON.stringify(3.14159));
  });
  test('string empty', () => {
    expect(stringify("")).toEqual(JSON.stringify(""));
  });
  test('string full', () => {
    expect(stringify("lorem ipsum")).toEqual(JSON.stringify("lorem ipsum"));
  });
  test('string multiline', () => {
    expect(
      stringify(`lorem
      ipsum`)
    ).toEqual(
      JSON.stringify(`lorem
      ipsum`)
    );
  });
  test('array', () => {
    expect(stringify([
      false,
      3,
      ""
    ])).toEqual(JSON.stringify([
      false,
      3,
      ""
    ]));
  });
  test('object', () => {
    expect(stringify({
      0: false,
      "a": 3,
      "": ""
    })).toEqual(JSON.stringify({
      0: false,
      "a": 3,
      "": ""
    }));
  });
  test('nested array', () => {
    expect(stringify([
      false,
      3,
      [
        false,
        3,
        [
          false,
          3,
          "",
          [[[[[[[[[[[[]]]]]]]]]]]]
        ]
      ]
    ])).toEqual(JSON.stringify([
      false,
      3,
      [
        false,
        3,
        [
          false,
          3,
          "",
          [[[[[[[[[[[[]]]]]]]]]]]]
        ]
      ]
    ]));
  });
  test('nested object', () => {
    expect(stringify({
      0: false,
      "a": 3,
      "": {
        0: false,
        "a": 3,
        "": {
          0: false,
          "a": 3,
          "": {
            0: false,
            "a": 3,
            "": {"":{"":{"":{"":{"":[]}}}}}
          }
        }
      }
    })).toEqual(JSON.stringify({
      0: false,
      "a": 3,
      "": {
        0: false,
        "a": 3,
        "": {
          0: false,
          "a": 3,
          "": {
            0: false,
            "a": 3,
            "": {"":{"":{"":{"":{"":[]}}}}}
          }
        }
      }
    }));
  });
});