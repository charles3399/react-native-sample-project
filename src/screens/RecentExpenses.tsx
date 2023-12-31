import {
    Text,
    View
} from 'react-native';

import ExpensesOutput from '@components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from 'store/expensesContext';
import { getDateMinusDays } from 'util/date';

const RecentExpenses = (): JSX.Element => {
    const expensesCtx = useContext(ExpensesContext)

    console.log('ctx', expensesCtx)

    const recentExpenses = expensesCtx.expenses.filter((expense: any) => {
        const today = new Date()
        const date7DaysAgo = getDateMinusDays(today, 7)

        return expense.date > date7DaysAgo
    })

    console.log('recentExpenses',recentExpenses)

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallBackText="No expenses registered for the last 7 days."
        />
    )
}

export default RecentExpenses;