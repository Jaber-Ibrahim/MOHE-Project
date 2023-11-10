import {Hero , LastNews, MediaNews ,Institutions , Services} from "./../Sections/importSections"
import {Container} from "./../Components/importComponents"

const Home = () => {
  return (
    <Container>
        <Hero/>
        <MediaNews/>
        <LastNews/>
        <Institutions/>
        <Services/>
    </Container>
  )
}

export default Home