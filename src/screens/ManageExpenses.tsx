import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ManageExpensesProp } from '@util/types';
import IconButton from '@components/UI/IconButton';
import ExpenseForm from '@components/ManageExpenses/ExpenseForm';
import { GlobalStyles } from 'constants/GlobalStyles';
import { ExpensesContext } from 'store/expensesContext';
import { contextProp } from "@util/types";

function ManageExpenses({ route, navigation }: ManageExpensesProp): JSX.Element {

    const goBack = () => navigation.goBack()

    const expenseCtx = useContext(ExpensesContext)
    
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    const selectedExpense = expenseCtx.expenses.find((expense: any) => expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
        expenseCtx.deleteExpense(editedExpenseId)

        goBack()
    }

    const confirmHandler = (expenseData: contextProp) => {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, expenseData)
        } else {
            expenseCtx.addExpense(expenseData)
        }

        goBack()
    }

    const cancelHandler = () => goBack()

    return (
        <View style={styles.container}>
            <ExpenseForm
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                submitButtonLabel={isEditing ? 'Add' : 'Update'}
                defaultValues={selectedExpense}
            />
            {
                isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalStyles.colors.error500}
                            size={36}
                            onPress={deleteExpenseHandler}
                        />
                    </View>
                )
            }
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})