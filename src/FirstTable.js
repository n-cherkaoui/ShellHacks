import "./styles/FirstTable.css"

const FirstTable = (props) => {
    return (
        <div className="table-styling">
            <h2>{props.stockName}</h2>

            <h2>{props.price}</h2>
        </div>
    );
}

export default FirstTable;