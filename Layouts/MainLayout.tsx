import Header from "../Components/Header/Header"

type IMainLayot = {
  children: React.ReactNode
}


const MainLayout: React.FC<IMainLayot> = ({ children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default MainLayout
