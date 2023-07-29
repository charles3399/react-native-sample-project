import React from 'react'
import { View, StyleSheet } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

import { GlobalStyles } from 'constants/GlobalStyles';
import { ExpensesOutputProp } from '@util/types';

const ExpensesOutput = ({expenses, expensesPeriod} : ExpensesOutputProp): JSX.Element => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
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