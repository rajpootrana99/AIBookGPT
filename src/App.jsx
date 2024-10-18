import { Header } from "./components/layouts/header"
import { Sidebar } from "./components/layouts/sidebar"


export const App = () => {
  return (
    <div className="w-screen h-full bg-gray-300">
      <Sidebar />
      <div className="w-full relative h-full float-right">
        <Header />
      </div>
    </div>
  )
}

