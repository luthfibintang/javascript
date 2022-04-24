import { useEffect } from "react"

export default function Profile(){
    useEffect(() => {
      document.title = "Profile"
    }, [])
    

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">Hello my name is Azisya Luthfi Bintang, You can call me Bintang, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et tincidunt mauris, sed convallis augue. Ut pulvinar neque a sem laoreet molestie.</p>
        </section>
    )
}