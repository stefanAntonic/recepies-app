import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
import SearchBar from "./SearchBar"

function Home() {
  return (
    <div>
        <SearchBar />
        <Popular/> 
        <Veggie/>

    </div>
  )
}

export default Home