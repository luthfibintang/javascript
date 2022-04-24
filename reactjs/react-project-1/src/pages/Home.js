import { useEffect } from "react"

export default function Home(){

    useEffect(() => {
      document.title = 'Home';
    }, [])
    


    return (
        <section className="section">
            <h1 className="section-title">Welcome to my website</h1>
            <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et tincidunt mauris, sed convallis augue. Ut pulvinar neque a sem laoreet molestie. Sed lacinia ipsum eu euismod dictum. Donec congue eget elit ut vestibulum. Duis varius placerat massa a ornare. Etiam dignissim eros a augue malesuada fermentum. Suspendisse eu sollicitudin tortor, ac rhoncus justo. Integer feugiat imperdiet mi, eleifend dignissim risus pulvinar congue. Sed et commodo odio, sed scelerisque elit. Nullam quis libero vitae turpis ornare accumsan in sit amet massa. Sed posuere et purus quis dapibus. Curabitur vitae mauris finibus, sagittis nunc sodales, rhoncus dui. Praesent interdum metus in volutpat hendrerit. In consectetur quis ante quis dapibus. Donec maximus dui in felis volutpat semper. Suspendisse nec velit eu urna maximus molestie vel fermentum libero.</p>
        </section>
    )
}