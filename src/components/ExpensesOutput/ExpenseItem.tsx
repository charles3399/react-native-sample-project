import { View, Pressable, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from 'constants/GlobalStyles';
import { getFormattedDate } from 'util/date';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ExpenseItemProp, ExpenseItemNavigationProp } from '@util/types'

const ExpenseItem = ({ description, amount, date, id }: ExpenseItemProp): JSX.Element => {
    const navigation = useNavigation<StackNavigationProp<ExpenseItemNavigationProp>>();

    const expensePressedHandler = () => {
        navigation.navigate('ManageExpenses', {
            description: description,
            amount: amount,
            date: date,
            expenseId: id,
        });
    }
    
    return (
        <Pressable onPress={expensePressedHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 4
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75
    }
})