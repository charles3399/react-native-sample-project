import ExpensesContextProvider from "store/expensesContext";
import AppNavigator from "./src/navigation/app-navigator";

function App(): JSX.Element {
  return (
    <ExpensesContextProvider>
      <AppNavigator />
    </ExpensesContextProvider>
  );
}

export default App;
