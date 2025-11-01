/** type predicate that validates a value is a number and is not NaN */
export const isValidNumber = (value: unknown): value is number => {
  return typeof value === "number" && !Number.isNaN(value);
};
