import {Hero , MediaNews, Services } from "./../Sections/importSections"
import {Container} from "./../Components/importComponents"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
// import Services from "../Sections/Services/Services"

const Home = () => {
  return (
    <>
    <Header />
    <Container>
      <Hero />
      <MediaNews />
      <Services />
    </Container>
    <Footer/> 
    </>
  )
}

export default Home