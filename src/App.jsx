import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import Income from "./components/Income";

export default function App() {
  return (
   <>
      <Header />
      <div className="bg-primary w-7/12 rounded-md h-96 shadow-2xl mt-8 ml-auto mr-auto">
          <div className="flex justify-around">
            <Income />
            <Balance />
            <Expenses />
          </div>
      </div>
   </>
  )
}