import {Header} from "./layouts/Header/Header";
import {Footer} from "./layouts/Footer/Footer";
import {MainContainer} from "./layouts/Main/MainContainer";

export function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  )
}

