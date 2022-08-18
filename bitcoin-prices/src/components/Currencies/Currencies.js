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
                const data = await res.json();
                // console.log(data)
                const objectData = Object.values(data)[0];
                setCrypto(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getCrypto();
    }, [])


    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table>
                <thead>
                    <tr>
                        <td>Symbol:</td>
                        <td>Name:</td>
                        <td>Symbol:</td>
                        <td>Price:</td>
                        <td>Volume(24hrs):</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
