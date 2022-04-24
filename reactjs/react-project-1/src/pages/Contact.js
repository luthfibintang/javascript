import { useEffect } from "react"

export default function Contact(){

    useEffect(() => {
        document.title = "Contact"
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p>You Can contact me by :</p>
            <ul className="section-list">
                <li>Wa : 085157500804</li>
                <li>Email : luthfibintang8@gmail.com</li>
            </ul>
            <p>Or By Social Media</p>
            <ul>
                <li className="section-list">Instagram : <a href="https://www.instagram.com/luthfibintang3/">Luthfi Bintang</a></li>
            </ul>

        </section>
    )
}