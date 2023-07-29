import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

import { GlobalStyles } from 'constants/GlobalStyles';
import { ExpensesOutputProp } from '@util/types';

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }: ExpensesOutputProp): JSX.Element => {
    
    let content = <Text style={styles.infoText}>{fallBackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
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
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})