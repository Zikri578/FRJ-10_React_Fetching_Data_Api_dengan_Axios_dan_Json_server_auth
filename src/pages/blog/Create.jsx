import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Create() {

    // Untuk submit
    const handleSubmit = (index) => {
        index.preventDefault()

        const title = index.target.title.value
        const slug = index.target.slug.value
        const banner = index.target.banner.value
        const body = index.target.body.value

        // const judul = index.target.title.value
        // const slg = index.target.slug.value
        // const isi = index.target.banner.value
        // const poster = index.target.body.value

        // validator sederhana
        if (!title || !slug || !banner || !body) {
            return alert("Silahkan Lengkapi Data Blognya")
        }

        // push data ke server be
        axios.post("http://localhost:3000/blogs", {
            // dengan catatan properti dengan variabel jika berbeda
            // judul: title,
            // slg: slug,
            // isi: body,
            // poster: banner

            // dengan catatan properti dengan variabel yang sudah dibuat
            title, slug, body, banner
        })
            .then((res) => {
                alert("Banner berhasil di tambahkan")
                window.location.href = "/"
            })
            .catch((error) => {
                alert("Terjadi Kesalahan dalam pengisian")
                console.error(error)
            })
    }

    return (
        <div className="container">
            <section className="wrapper">

                <h1>Halaman Create Blog</h1>

                <form action="" className="blog_form" onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="slug">slug</label>
                        <input type="text" id="slug" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="banner">banner</label>
                        <input type="text" id="banner" />
                    </div>
                    <div className="form_group fg_textarea">
                        <label htmlFor="body">body</label>
                        <textarea type="text" id="body" ></textarea>
                    </div>

                    <button type="submit" className="sub">submit</button>
                </form>

            </section>
        </div>
    )
}