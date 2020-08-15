type ValidJSON = ValidJSONObject;
type isPrimitive = string | number | boolean;
type isReference = object | isPrimitive[] | isNullAndUndefined;
type isNullAndUndefined = null | undefined;

interface ValidJSONObject {
  input: isPrimitive | isReference | isNullAndUndefined;
  [key: string]: isPrimitive | isReference | isNullAndUndefined;
}

export const stringify = (input: ValidJSONObject["input"]): string => {
  if (
    typeof input === "number" ||
    typeof input === "boolean" ||
    input === null
  ) {
    return `${input}`;
  }

  if (typeof input === "string") {
    const inputStrArr: Array<string> = input.split(/\n/);

    if (inputStrArr.length > 1) {
      return `"${inputStrArr.join(/\n/)}"`.replace(/\//g, "");
    } else {
      return `"${input}"`;
    }
  }

  let results: string[] = [];
  if (Array.isArray(input)) {
    input.forEach((element) => results.push(stringify(element)));
    return `[${results.join(",")}]`;
  } else {
    for (let key in input) {
      const value: isPrimitive = input[key];
      if (value !== undefined || typeof value !== "function") {
        results.push(`${stringify(key)}:${stringify(value)}`);
      }
    }
    return `{${results.join(",")}}`;
  }
};
