import { FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'

interface Props {
    expenses: Array<any>
}

const renderExpenseItem = (itemData: any) => {
    return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }: Props): JSX.Element {
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