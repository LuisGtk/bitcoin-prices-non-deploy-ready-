import './Home.css'
import { useState, useEffect } from 'react';
export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const apiURL = "https://api.coinstats.app/public/v1/news?skip=0&limit=5"
            try {
                const res = await fetch(apiURL);
                const news = await res.json();
                // console.log(news)
                const objectData = Object.values(news)[0];
                setNews(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getNews();
    
    }, [])

    return news.length > 0 ? (
        <section className="container">
            {news.length &&
                news.map((news) => {
                    return (
                        <div className='container'>
                            <h2 src={news.title}></h2>
                            {/* <p>description:{news.description}</p> */}
                            <p>Source:{news.source}</p>
                        </div>
                    )
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}

    // return (
    //     <div>
    //         <h1>Welcome to my Crypto app made in React.</h1>
    //     </div>
    // )
