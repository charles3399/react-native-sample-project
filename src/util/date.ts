export const getFormattedDate = (date: any) => date.toISOString().slice(0, 10)

export const getDateMinusDays = (date: any, days: number) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)