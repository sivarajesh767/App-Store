// Write your code here
import './index.css'

const AppItem = props => {
  const {eachappDetails} = props
  const {appName, imageUrl} = eachappDetails

  return (
    <li>
      
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
