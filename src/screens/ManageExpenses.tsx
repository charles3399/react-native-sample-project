import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { getFormattedDate } from 'util/date';
import { ManageExpensesProp } from '@util/types';

function ManageExpenses({ route, navigation }: ManageExpensesProp): JSX.Element {
    console.log(route)
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return (
        <View>
            <Text>Description: {route.params?.description}</Text>
            <Text>Amount: {route.params?.amount}</Text>
            <Text>Date: {isEditing ? getFormattedDate(route.params.date) : null}</Text>
        </View>
    )
}

export default ManageExpenses;