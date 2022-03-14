export const randomStatus = () => {
  const statusArray = ["Created", "Drafted"];
  const randomIndex = Math.floor(Math.random() * statusArray.length);

  return statusArray[randomIndex];
};
