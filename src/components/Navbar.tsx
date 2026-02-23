import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar glass-navbar animate-fade-in">
            <div className="container navbar-container">
                <Link href="/" className="navbar-logo">
                    RHETO<span style={{ fontSize: '0.45em', letterSpacing: '0.4em', marginLeft: '0.4em', verticalAlign: 'middle', display: 'inline-block', marginTop: '-0.3em' }}>ARQ</span>
                </Link>
                <div className="navbar-links">
                    <Link href="#historia" className="nav-link">Cimientos</Link>
                    <Link href="#legado" className="nav-link">Legado</Link>
                    <a href="#" className="btn-secondary">Contacto</a>
                </div>
            </div>
        </nav>
    );
}
