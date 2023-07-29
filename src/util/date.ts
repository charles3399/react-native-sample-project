export const getFormattedDate = (date: any) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export const getDateMinusDays = (date: any, days: number) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)