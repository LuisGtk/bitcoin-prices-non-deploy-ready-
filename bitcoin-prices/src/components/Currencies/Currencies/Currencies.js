import Axios from "axios";
import './Currencies.css';
import { useEffect, useState } from "react";

export default function Currencies() {
    // console.log({currency})
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        Axios.get(
            `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
        ).then((res) => {
            setCrypto(res.data.coins);
        });
    }, []);
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />

        </div>
    );
}
console.log({})