import { useState, useEffect } from "react";

export default function Price(props) {
    // beginning the use of useState
    const [rate, setRate] = useState('')
    const { currency } = props.match.params
    //creating a function to get data from the coindesk API based off country code we recieve
    const getApiData = async () => {
        //API variable so when clicked, regardless of type of money, it will show the data
        const apiEndPoint = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
        try {
            //fetch
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/${currency}.json');
            const data = await response.json();
            setRate(data.bpi[currency].rate)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <small>{props}</small>

        </div>
    )
}