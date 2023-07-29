import ExpensesOutput from '@components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from 'store/expensesContext';

const AllExpenses = (): JSX.Element => {
    const expensesCtx = useContext(ExpensesContext)

    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallBackText="No registered expenses found."
        />
    )
}

export default AllExpenses;