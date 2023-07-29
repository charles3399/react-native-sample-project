export interface ExpenseItemProp {
    description: string,
    amount: number,
    date: string,
    id: string,
}

export interface ExpenseSummaryProp {
    expenses: Array<any>,
    periodName: String
}

export interface ManageExpensesProp {
    route: any,
    navigation: any
}

export interface IconButtonProp {
    icon: string,
    size: number,
    color: string,
    onPress: any
}

