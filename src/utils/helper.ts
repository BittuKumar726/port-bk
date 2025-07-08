export const calculateExperience = (startDateStr: string) => {
  const start = new Date(startDateStr);
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} year${years !== 1 ? "s" : ""}${
    months > 0 ? ` and ${months} month${months !== 1 ? "s" : ""}` : ""
  }`;
};


