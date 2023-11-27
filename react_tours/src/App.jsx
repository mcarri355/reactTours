import './App.css';
import Tour from '../src/components/Tour'

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [tour, setTour] = useState([])

    useEffect(() =>{
        fetch('https://course-api.com/react-tours-project').then((response) => {
            if(response.status >= 200 && response.status <= 299){
                return response.json
            } else {
                setIsLoading(false)
                setIsError(true)
                throw new Error(response.statusText)
            }
        }).then((tour) =>{
            setTour(tour)
            setIsLoading(false)
            setIsError(true)
        }).catch((error) => {console.log(error)});
    }, []);

    if(isLoading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if(isError){
        return(
            <div>
                <h1>Error....</h1>
            </div>
        )
    }

  return (
    <div></div>
  )
}

export default App

