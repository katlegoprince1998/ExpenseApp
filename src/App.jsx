import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import Income from "./components/Income";
import History from "./components/History";

export default function App() {
  return (
   <>
      <Header />
      <div className="bg-primary w-7/12 rounded-md py-5 shadow-2xl mt-8 ml-auto mr-auto">
          <div className="flex justify-around">
            <Income />
            <Balance />
            <Expenses />
          </div>
          <div className="flex justify-around">
            <AddTransactions />
            <History />
          </div>
      </div>
   </>
  )
}