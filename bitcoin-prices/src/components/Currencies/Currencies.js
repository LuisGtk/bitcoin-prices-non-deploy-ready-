import listOfCurrencies from './list.json';
import { Link } from 'react-router-dom'

export default function Currencies() {
    // console.log({currency})
    return (
        <div>
            <h2>Select a country to see the Price of Bitcoin</h2>
            {/* using map to display the list of countries and currencies */}
            {/*  */}
            {listOfCurrencies.map((currency, i) => {
                return (
                    <div className="currency" key={i}>
                        <p>
                            {/* making the abreviation of country currencies into links that, when clicked, loads in a page */}
                            <Link to={`/price/${currency.currency}`}>{currency.currency}</Link> : {currency.country}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
