import './App.css';
import Input from './Input'
import Button from './Button'
import Spinner from './Spinner'
import Card from './Card'
import api from '../api/Api'
import { useEffect, useState } from "react";

function App() {
  const [querySearch, setQuerySearch] = useState('')
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api.search(querySearch, 20).then(data => {
      setCards(data.results.map((item) => ({
        id: item.id,
        src: item.urls.regular,
        alt: item.alt_description,
        title: item.description,
        subtitle: item.user.name,
      })))
      setIsLoading(false)
    })
  }, [querySearch])

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-search">
          <Input placeholder={'type to search...'} handleChange={() => {}} />
          <Button title="Search" handleClick={() => setQuerySearch('brazil')} />
        </div>
        <div className="App-cards">
          {isLoading
            ? <Spinner />
            : cards.map(({ id, ...card }) => <Card key={id} {...card} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
