import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import api from '../api/Api'
import { Main } from './Main'
import { Photo } from "./Photo";
import './App.css';
import { NotFound } from "./NotFound";

function App() {
  const [querySearch, setQuerySearch] = useState('')
  const [cards, setCards] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!isSubmitted) {
      return
    }

    api.search(querySearch, 20).then(data => {
      setCards(data.results.map((item) => ({
        id: item.id,
        src: item.urls.regular,
        alt: item.alt_description,
        title: item.description,
        subtitle: item.user.name,
      })))
      setIsSubmitted(false)
    })
  }, [querySearch, isSubmitted])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setIsSubmitted(true)
  }

  const handleQuerySearchChange = (ev) => {
    setQuerySearch(ev.target.value)
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          <Main
            cards={cards}
            isSubmitted={isSubmitted}
            querySearch={querySearch}
            handleSubmit={handleSubmit}
            handleChange={handleQuerySearchChange}
          />
        } />
        <Route exact path="/photos/:id" element={<Photo photos={cards} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
