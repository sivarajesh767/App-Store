// Write your code here
import './index.css'

const TabItem = props => {
  const {eachDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = eachDetails
  const tabItemBtn = () => {
    setActiveTabId(tabId)
  }
  const btnClassName=isActive? 'tab-button active' : 'tab-button'

  return (
    <li className="listItem-TabItem">
      <button type="button" onClick={tabItemBtn} className={btnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
