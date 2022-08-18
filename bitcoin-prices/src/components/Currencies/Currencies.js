import './Currencies.css';
import { useEffect, useState } from "react";

export default function Currencies() {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);


    useEffect(() => {
        const getCrypto = async () => {
            const apiURL = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR"
            try {
                const res = await fetch(apiURL);
                const crypto = await res.json();
                // console.log(crypto)
                const objectData = Object.values(crypto)[0];
                setCrypto(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getCrypto();
    }, [])

    return crypto.length > 0 ? (
        <section className="container">
            {crypto.length &&
                crypto.map((crypto) => {
                    return (
                        <>
                            <img src={crypto.icon}></img>
                            <h2>{crypto.id}</h2>
                            <p>{crypto.price}</p>
                            <p>{crypto.volume}</p>
                            {/* <p>{crypto.princeBtc}</p> */}
                        </>
                    )
                })}









        </section>
    ) : (
        <h1>loading...</h1>
    );
}