import Header from "../Components/Header/Header"

type IMainLayot = {
  children: React.ReactNode
}


const MainLayout: React.FC<IMainLayot> = ({ children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default MainLayout
