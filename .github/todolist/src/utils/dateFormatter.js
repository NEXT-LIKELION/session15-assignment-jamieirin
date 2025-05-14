export function getDdayText(deadlineStr) {
  const today = new Date();
  const deadline = new Date(deadlineStr);
  
  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  const diffTime = deadline - today;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return "D-day";
  return `D+${Math.abs(diffDays)}`;
}
