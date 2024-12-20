export const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short", // Mon
      month: "short", // Aug
      day: "2-digit", // 29
      year: "numeric", // 2022
    }).format(date);
  };