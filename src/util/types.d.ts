export type AppNavigatorNavigationProp = {
    ManageExpenses: {
        description: string,
        amount: number,
        date: Date = new Date(),
    } | undefined,
    RecentExpenses: object | undefined,
    AllExpenses: object | undefined,
    ExpensesOverview: object | undefined
}

export interface ExpenseItemProp {
    description: string,
    amount: number,
    date: Date = new Date(),
    id: string,
}

export type ExpenseItemNavigationProp = {
    ManageExpenses: {
        description: string,
        amount: number,
        date: Date = new Date(),
        expenseId: string,
    } | undefined
}

export interface ExpenseSummaryProp {
    expenses?: any,
    periodName?: string
}

export interface ExpenseListProp {
    expenses: Array<any>
}

export interface ExpensesOutputProp {
    expenses?: any,
    expensesPeriod?: string
    fallBackText?: string
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
