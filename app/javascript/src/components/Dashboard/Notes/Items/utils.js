export const randomStatus = () => {
  const statusArray = ["Created", "Drafted"];
  const randomIndex = Math.floor(Math.random() * statusArray.length);
  const status = statusArray[randomIndex];

  return `${status} 2 Hours ago`;
};
