import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="item-container">
      <div className="object-container">
        <p className="paragraph">{timeAccessed}</p>
        <img className="domain-logo" alt="domain logo" src={logoUrl} />
        <p className="paragraph">{title}</p>
        <p className="domain-paragraph">{domainUrl}</p>
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            className="icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
