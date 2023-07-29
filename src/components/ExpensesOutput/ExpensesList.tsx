import { FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'
import { ExpenseListProp } from '@util/types'

const renderExpenseItem = (itemData: any) => <ExpenseItem {...itemData.item} />

function ExpensesList({ expenses }: ExpenseListProp): JSX.Element {
    console.log('EXPENSESs', expenses)
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default ExpensesList