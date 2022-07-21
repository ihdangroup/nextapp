import Link from 'next/link'
export default function Navbar() {
    return (
        <div>
            <section id="navbar">
                <nav className="nav">
                    <div className="container justify-between gap-x-6 w-full h-full">
                        <div>
                            <Link href="/"><a className="font-bold">BRAND</a></Link>
                        </div>
                        <div>
                            <ul className="flex text-sm">
                                <li className="link hidden md:list-item">
                                    <Link href="/"><a>Home</a></Link>
                                </li>
                                <li className="link hidden md:list-item">
                                    <Link href="/about"><a>About</a></Link>
                                </li>
                                <li className="link hidden md:list-item" >
                                    <Link href="/"><a>Contact</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><button className="button link">Sign Up</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}
