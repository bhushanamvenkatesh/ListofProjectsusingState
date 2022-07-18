import './index.css'

const TabItem = props => {
  const {tabDetails, onUserClickChangeUSerId, isActive} = props

  const {displayText, tabId} = tabDetails
  console.log(isActive)

  const onTabClick = () => {
    onUserClickChangeUSerId(tabId)
  }

  const activeButtonclassName = () => (isActive ? 'active-tab-btn' : '')

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButtonclassName()}`}
        onClick={onTabClick}
      >
        {displayText},
      </button>
    </li>
  )
}

export default TabItem
