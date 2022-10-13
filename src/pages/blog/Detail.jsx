import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {

    // menangkap parameter id dari url
    const { id } = useParams()

    const [detailBlog, setdetailBlog] = useState();

    // component life cycle did mount
    useEffect(() => {
        axios.get(`http://localhost:3000/blogs/${id}`)
            .then((res) => {
                // console.info(res.data)
                setdetailBlog(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (!detailBlog) {
        return (
            <div className="loading_screen">
                Data Sedang Loading...
            </div>
        )
    }
    return (
        <div className="container">
            <section className="wrapper wrapper_detail">
                <h1>{detailBlog.title}</h1>
                <img src={detailBlog.banner} alt={detailBlog.banner} />
                <p>{detailBlog.body}</p>
            </section>
        </div>
    )
}