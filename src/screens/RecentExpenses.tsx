import {
    Text,
    View
} from 'react-native';

import ExpensesOutput from '@components/ExpensesOutput/ExpensesOutput';

const RecentExpenses = (): JSX.Element => {
    return <ExpensesOutput expensesPeriod="Last 7 Days" />
}

export default RecentExpenses;