export const counter = $state({
  count: 0,
});

export const increment = () => {
  counter.count += 1;
};
