export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="foot-top">
                    <div>
                        <span className="wordmark">Sonia&rsquo;s Art</span>
                        <p>Original paintings from a small studio in New Jersey. Made slowly, sold once.</p>
                    </div>
                    <div className="foot-col">
                        <h3>Shop</h3>
                        <a href="#shop">New arrivals</a>
                        <a href="#">All originals</a>
                        <a href="#">Sold archive</a>
                    </div>
                    <div className="foot-col">
                        <h3>Studio</h3>
                        <a href="#story">Our story</a>
                        <a href="#">Process</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="foot-col">
                        <h3>Connect</h3>
                        <a href="#">Instagram</a>
                        <a href="#">Email</a>
                    </div>
                </div>
                <div className="foot-bottom">
                    <span>&copy; 2026 Sonia&rsquo;s Art</span>
                    <a href="#top" className="back-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}
