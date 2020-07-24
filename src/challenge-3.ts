type ValidJSON = ValidJSONObject; // | ... | ... | ...

interface ValidJSONObject {
  // ...
}

export const stringify = (input: ValidJSONObject): string => {
  if (
    typeof input === "number" ||
    typeof input === "boolean" ||
    input === null
  ) {
    return `${input}`;
  }

  if (typeof input === "string") {
    const inputStrArr = input.split(/\n/);

    if (inputStrArr.length > 1) {
      return `"${inputStrArr.join(/\n/)}"`.replace(/\//g, "");
    } else {
      return `"${input}"`;
    }
  }

  let results = [];
  if (Array.isArray(input)) {
    input.forEach((element) => results.push(stringify(element)));
    return `[${results.join(",")}]`;
  } else {
    for (let key in input) {
      if (input[key] !== undefined || typeof input[key] !== "function") {
        results.push(`${stringify(key)}:${stringify(input[key])}`);
      }
    }
    return `{${results.join(",")}}`;
  }
};
