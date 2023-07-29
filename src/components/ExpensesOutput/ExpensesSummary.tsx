import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from 'constants/GlobalStyles';
import { ExpenseSummaryProp } from '@util/types'

function ExpensesSummary({ expenses, periodName }: ExpenseSummaryProp): JSX.Element {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>$ { expensesSum.toFixed(2) }</Text>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
})