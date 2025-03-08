export const formatValue = (value: number): string =>
    Intl.NumberFormat("da-dk", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value)

export const getPercentage = (percentageNumber: number, total: number) => (percentageNumber / total) * 100

export type ViewType = "Afdelinger" | "Aarhus" | "Aalborg" | "København" | "Esbjerg" | "Odense"
