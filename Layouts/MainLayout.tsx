import Header from "../Components/Header/Header"

type IMainLayout = {
  children: React.ReactNode
}


const MainLayout: React.FC<IMainLayout> = ({ children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default MainLayout
