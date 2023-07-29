import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ManageExpensesProp } from '@util/types';
import IconButton from '@components/UI/IconButton';
import Button from '@components/UI/Button';
import { GlobalStyles } from 'constants/GlobalStyles';
import { ExpensesContext } from 'store/expensesContext';

function ManageExpenses({ route, navigation }: ManageExpensesProp): JSX.Element {

    const goBack = () => navigation.goBack()

    const expenseCtx = useContext(ExpensesContext)
    
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
        expenseCtx.deleteExpense(editedExpenseId)

        goBack()
    }

    const confirmHandler = () => {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, {
                description: 'Updated Test',
                amount: 69.99,
                date: new Date('2023-07-30')
            })
        } else {
            expenseCtx.addExpense({
                description: 'Added Test',
                amount: 420.99,
                date: new Date('2023-07-31')
            })
        }

        goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode="flat" onPress={() => goBack()}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})