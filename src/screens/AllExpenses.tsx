import {
    Text,
    View
} from 'react-native';

import ExpensesOutput from '@components/ExpensesOutput/ExpensesOutput';

const AllExpenses = (): JSX.Element => {
    return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;