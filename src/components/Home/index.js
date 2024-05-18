import {Redirect} from 'react-router-dom'
import Header from '../Header'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token == undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <div className="container">
      <Header />
      <div className="headingme">
        <h1 className="heading">Your flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          className="card"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default Home
