import Input from "./Input";
import Button from "./Button";
import Spinner from "./Spinner";
import Card from "./Card";
import './Main.css'

export function Main({ handleChange, handleSubmit, querySearch, isSubmitted, cards }) {
  return (
    <div className="Main">
      <form className="Main-search" onSubmit={handleSubmit}>
        <Input placeholder={'type to search...'} value={querySearch} handleChange={handleChange} />
        <Button title="Search" type={'submit'} />
      </form>
      <div className="Main-cards">
        {isSubmitted
          ? <Spinner />
          : cards.map(({ id, ...card }) => <Card key={id} id={id} {...card} />)
        }
      </div>
    </div>
  )
}
