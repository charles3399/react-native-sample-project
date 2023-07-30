import { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Input from '@components/ManageExpenses/Input'
import Button from '@components/UI/Button'
import { ExpenseFormProp } from '@util/types'
import { getFormattedDate } from 'util/date'

const ExpenseForm = ({onSubmit, onCancel, submitButtonLabel, defaultValues}: ExpenseFormProp): JSX.Element => {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : '',
    })

    const inputChangedHandler = (inputIdentifier: string, enteredValue: any) => {
        setInputValues((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIdentifier]: enteredValue
            }
        })
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = expenseData.description.trim().length > 0

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Invalid input', 'Please check your input values.')
            return
        }

        onSubmit(expenseData)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }}
                />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                // autoCapitalize: 'sentences'
                // autocorrect: false,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
            <View style={styles.buttons}>
                <Button mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
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