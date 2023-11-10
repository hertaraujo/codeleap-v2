const getQuotientTrunc = (dividend: number, divisor: number) =>
  Math.trunc(dividend / divisor);

export const formatDateString = (date: number) => {
  const now = Date.now();
  if (now < date) return `from the future`;

  const minutesPassed = getQuotientTrunc(now - date, 1000 * 60);

  if (minutesPassed < 2) return `few seconds ago`;

  if (minutesPassed < 60) return `${minutesPassed} minutes ago`;

  if (minutesPassed < 120) return `an hour ago`;

  if (minutesPassed < 60 * 24)
    return `${getQuotientTrunc(minutesPassed, 60)} hours ago`;

  if (minutesPassed < 60 * 24 * 7) {
    const days = getQuotientTrunc(minutesPassed, 60 * 24);
    return `${days > 1 ? days : `a`} day${days > 1 ? `s` : ''} ago`;
  }

  if (minutesPassed < 60 * 24 * 30) {
    const weeks = getQuotientTrunc(minutesPassed, 60 * 24 * 7);
    return `${weeks > 1 ? weeks : `a`} week${weeks > 1 ? `s` : ''} ago`;
  }

  if (minutesPassed < 60 * 24 * 365) {
    const months = getQuotientTrunc(minutesPassed, 60 * 24 * 30);
    return `${months > 1 ? months : `a`} month${months > 1 ? `s` : ''} ago`;
  }

  const years = getQuotientTrunc(minutesPassed, 60 * 24 * 365);
  return `${years > 1 ? years : `an`} year${years > 1 ? `s` : ''} ago`;
};
