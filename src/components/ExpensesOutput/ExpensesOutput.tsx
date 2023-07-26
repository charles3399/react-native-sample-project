import React from 'react'
import { View, StyleSheet } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

import { GlobalStyles } from 'constants/GlobalStyles'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-07-18')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 29.99,
        date: new Date('2023-04-20')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-04-24')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 15.99,
        date: new Date('2023-01-05')
    },
    {
        id: 'e5',
        description: 'Another Book',
        amount: 17.99,
        date: new Date('2023-12-18')
    },
    {
        id: 'e6',
        description: 'Jordans',
        amount: 7.99,
        date: new Date('2023-04-20')
    },
    {
        id: 'e7',
        description: 'Steal Yeezys',
        amount: 8.99,
        date: new Date('2023-04-24')
    },
    {
        id: 'e8',
        description: 'Earrings',
        amount: 15.99,
        date: new Date('2023-06-05')
    },
    {
        id: 'e9',
        description: 'Chainz',
        amount: 20.99,
        date: new Date('2023-06-18')
    },
]

interface Props {
    expenses: Array<any>,
    expensesPeriod: String
}

const ExpensesOutput = ({expenses, expensesPeriod} : Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
})