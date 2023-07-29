export interface ExpenseItemProp {
    description: string,
    amount: number,
    date: Date = new Date(),
    id: string,
}

export interface ExpenseSummaryProp {
    expenses?: any,
    periodName?: String
}

export interface ExpensesOutputProp {
    expenses?: any,
    expensesPeriod?: String
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

export interface ButtonProp {
    onPress: any,
    children: any,
    mode?: string,
    style?: object
}

export interface contextProp {
    description: string,
    date: Date = new Date(),
    amount: number,
}

export type ACTIONTYPE = | { type: 'ADD', payload: any }
    | { type: 'UPDATE', payload: any }
    | { type: 'DELETE', payload: any }
