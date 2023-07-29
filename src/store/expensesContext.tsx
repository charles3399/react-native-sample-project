import { createContext, useReducer } from "react";
import { contextProp, ACTIONTYPE } from "@util/types";
import { DUMMY_EXPENSES } from "data/dummy-data";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}: contextProp) => { },
    deleteExpense: (id: number) => { },
    updateExpense: (id: number, {description, amount, date}: contextProp) => {}
});

const expensesReducer = (state: any, action: ACTIONTYPE) => {
    console.log('state', state)
    console.log('action', action)
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{ ...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense: any) => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = { ...updatableExpense, ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updatableExpenseIndex] = updatedItem
            return updatedExpenses
        case 'DELETE':
            return state.filter((expense: any) => expense.id !== action.payload)
        default:
            return state
    }
}

const ExpensesContextProvider = ({ children }: any) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expenseData: any) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const updateExpense = (id: number, expenseData: any) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const deleteExpense = (id: number) => {
        dispatch({type: 'DELETE', payload: id})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider