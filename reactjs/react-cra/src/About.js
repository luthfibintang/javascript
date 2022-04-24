import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
    <>
        <h1>About page</h1>
        <p>Hai Nama saya Azisya Luthfi Bintang, ini adalah halamana about, Untuk selengkapnya bisa klik link dibawah.</p>
        <ul>
            <li><Link to="team">Team</Link></li>
        </ul>
        <Outlet />
    </>
    )
}