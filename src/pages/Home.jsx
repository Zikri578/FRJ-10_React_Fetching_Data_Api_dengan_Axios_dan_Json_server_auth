import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";


export default function Home() {

    // State
    const [blogData, setBlogData] = useState([]);

    // Did Mount
    useEffect(() => {
        // hit ke api json server di localhost
        axios.get("http://localhost:3000/blogs")
            .then((res) => {
                console.info(res.data)
                setBlogData(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])



    return (
        <div className="container">
            <section className="wrapper">
                <div className="blog_wrapper">

                    <h1>Halaman Home</h1>

                    {/* panggil useState kemudian di map dan masukkan variabel bebas */}
                    {blogData.map((index) => {
                        return (
                            <div className="blog_card">
                                <h2>{index.title}</h2>
                                <img src={index.banner} alt={index.title} key={index.id} />
                                <p>{index.body}</p>

                                {/* sesuai dengan route halaman detail blog */}
                                <Link to={`/blog/detail/${index.id}/${index.slug}`}>Detail</Link>
                            </div>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}