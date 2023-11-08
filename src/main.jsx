import ReactDom from 'react-dom/client'
import {BrowserRouter as Router, Route, Link, Routes, useMatch, useParams} from 'react-router-dom'
import kappaleet from '../dummy/dummy'
import './App.css'



const Menu = () => (
  <aside>
      <Link to="/"> Kategoriat </Link>
  </aside>
    )

const Kategoriat = ({kategoriat}) => (
  <div>
  <Menu/>
  <aside>
      {kategoriat.map((kategoria) => 
        <li key={kategoria}>
        <Link to={`/${kategoria}`}>{kategoria}</Link>
        </li>
      )} 
  </aside>
  </div>
  )

const Kappaleet = ({ kappaleet }) => (
  <article>
    {kappaleet.map((kappale) => (
      <div key={kappale.id}>
        <h2>{kappale.nimi}</h2>
        <pre>{kappale.sanat}</pre>
      </div>
    ))}
  </article>
)

const App = () => {
  const kategoriat = kappaleet.reduce((acc, cur) => {
    if (!acc.includes(cur.kategoria)){
      acc.push(cur.kategoria)
    }
    return acc
  }, [])

  const match = useMatch('/:kategoria')
  const kategoriaKappaleet = match
    ? kappaleet.filter((kappale) => kappale.kategoria === match.params.kategoria)
    : null

  return (
    <>
    <h1> Kalu </h1>
    <div className="container">
      <Kategoriat kategoriat={kategoriat}/>
      <Routes>
        <Route path=""  />}/>
        {kategoriat.map((kategoria) => (
        <Route key={kategoria} path={`/${kategoria}`} element={
          <Kappaleet kappaleet={kategoriaKappaleet} />}/>))}
      </Routes>
    </div>
    </>
  )}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <Router><App /></Router>)
