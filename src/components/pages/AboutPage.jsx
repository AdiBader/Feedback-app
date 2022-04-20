import Card from "../shared/Card"
import {Link} from 'react-router-dom'


function AboutPage({component}) {
  return (
    <Card>
        <div className="about">
        <h1>About This Project</h1>
        <p>This as a React app to leave feedback for product or service</p>
        </div>
        <Link to="/">Back To Home</Link>
    </Card>
  )
}

export default AboutPage