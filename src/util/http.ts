import axios from "axios"
import { firebaseUrl } from "./env";

export const storeExpense = (expenseData: any) => {
    axios.post(
        // the expenses.json is a firebase specific (data name and type you want to send)
        firebaseUrl + 'expenses.json', 
        expenseData
    );
}