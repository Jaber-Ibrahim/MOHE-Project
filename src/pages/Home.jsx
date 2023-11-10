import {Hero , LastNews, MediaNews ,Institutions} from "./../Sections/importSections"
import {Container} from "./../Components/importComponents"

const Home = () => {
  return (
    <Container>
        <Hero/>
        <MediaNews/>
        <LastNews/>
        <Institutions/>
    </Container>
  )
}

export default Home