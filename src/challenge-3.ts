type ValidJSON = ValidJSONObject // | ... | ... | ...

interface ValidJSONObject {
  // ...
}

export const stringify = (input: any): string => (
  '""'
);
