<>
    <meta charSet="UTF-8" />
    <title>Sonia's Art — Redesign</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
    />
    <style
        dangerouslySetInnerHTML={{
            __html:
                "\n  :root{\n    --ink:#20261f;\n    --canvas:#f6f3ec;\n    --moss:#3f5443;\n    --moss-dark:#2c3c31;\n    --dusk:#5c6b8a;\n    --plum:#7a5c7e;\n    --line:#dcd6c6;\n    --paper:#efeadd;\n  }\n  *{box-sizing:border-box;}\n  html,body{margin:0;padding:0;}\n  body{\n    background:var(--canvas);\n    color:var(--ink);\n    font-family:'Work Sans', sans-serif;\n    -webkit-font-smoothing:antialiased;\n  }\n  h1,h2,h3,.display{\n    font-family:'Fraunces', serif;\n    font-weight:500;\n    margin:0;\n    letter-spacing:-0.01em;\n  }\n  a{color:inherit; text-decoration:none;}\n  img{max-width:100%; display:block;}\n  .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}\n\n  /* header */\n  header{\n    border-bottom:1px solid var(--line);\n    position:sticky; top:0; background:var(--canvas); z-index:20;\n  }\n  .nav{\n    display:flex; align-items:center; justify-content:space-between;\n    padding:18px 32px; max-width:1180px; margin:0 auto;\n  }\n  .nav-left{display:flex; gap:28px; align-items:center; font-size:14.5px;}\n  .nav-left a{opacity:.75; transition:opacity .15s;}\n  .nav-left a:hover{opacity:1;}\n  .wordmark{font-family:'Fraunces', serif; font-size:21px; font-weight:600; letter-spacing:.01em;}\n  .nav-right{display:flex; gap:22px; align-items:center;}\n  .icon-btn{background:none; border:none; cursor:pointer; color:var(--ink); display:flex;}\n  .cart-count{\n    font-size:11px; background:var(--moss); color:var(--canvas);\n    border-radius:50%; width:16px; height:16px; display:flex;\n    align-items:center; justify-content:center; margin-left:-10px; margin-top:-8px;\n  }\n\n  /* hero */\n  .hero{\n    position:relative; height:78vh; min-height:520px; overflow:hidden;\n    background:\n      radial-gradient(140% 90% at 20% 10%, #3a5a72 0%, transparent 55%),\n      radial-gradient(120% 100% at 80% 30%, #1f3244 0%, transparent 60%),\n      linear-gradient(200deg, #6f92a8 0%, #35506a 38%, #1d2c3a 75%, #10181f 100%);\n  }\n  .hero::before{\n    content:\"\";\n    position:absolute; inset:0;\n    background-image:\n      repeating-linear-gradient(115deg, rgba(255,255,255,.05) 0px, rgba(255,255,255,.05) 1px, transparent 1px, transparent 34px),\n      repeating-linear-gradient(70deg, rgba(255,255,255,.04) 0px, rgba(255,255,255,.04) 1px, transparent 1px, transparent 46px);\n    mix-blend-mode:overlay;\n  }\n  .hero::after{\n    content:\"\";\n    position:absolute; inset:0;\n    background:linear-gradient(0deg, rgba(16,20,17,.82) 0%, rgba(16,20,17,.1) 45%, rgba(16,20,17,0) 65%);\n    z-index:1;\n  }\n  .hero-img{\n    position:absolute; inset:0; width:100%; height:100%; object-fit:cover;\n    opacity:0; transition:opacity .5s ease; z-index:0;\n  }\n  .hero-img.loaded{opacity:1;}\n  .hero-content{\n    position:relative; z-index:2; height:100%;\n    display:flex; flex-direction:column; justify-content:flex-end;\n    padding:0 32px 56px; max-width:1180px; margin:0 auto;\n  }\n  .hero-content h1{\n    color:var(--canvas); font-size:clamp(32px, 4.6vw, 58px);\n    max-width:15ch; line-height:1.06;\n  }\n  .hero-content p{\n    color:#e7e4da; font-size:16px; max-width:46ch; margin-top:18px; line-height:1.55;\n  }\n  .btn{\n    display:inline-flex; align-items:center; gap:8px;\n    font-size:14.5px; font-weight:500; padding:13px 22px;\n    border:1px solid currentColor; margin-top:26px; width:fit-content;\n    transition:background .15s, color .15s;\n  }\n  .btn.light{color:var(--canvas);}\n  .btn.light:hover{background:var(--canvas); color:var(--ink);}\n  .btn.dark{color:var(--ink); border-color:var(--ink);}\n  .btn.dark:hover{background:var(--ink); color:var(--canvas);}\n\n  /* museum plate caption */\n  .plate{\n    position:absolute; z-index:2; left:32px; bottom:24px;\n    font-size:12.5px; color:#d8d3c4; letter-spacing:.02em;\n    display:flex; align-items:center; gap:10px;\n  }\n  .plate .num{color:#8f9a8a;}\n\n  /* mood pills */\n  .moods{display:flex; gap:10px; flex-wrap:wrap; margin-top:2px;}\n  .mood-pill{\n    font-size:12.5px; padding:7px 14px; border:1px solid var(--line);\n    color:#5a5a50; transition:border-color .15s, color .15s;\n  }\n  .mood-pill:hover, .mood-pill.active{border-color:var(--ink); color:var(--ink);}\n  .mood-strip{\n    display:flex; justify-content:space-between; align-items:center;\n    flex-wrap:wrap; gap:16px; margin-bottom:44px;\n  }\n  .product-mood{\n    font-size:11.5px; text-transform:lowercase; color:#8a8a7e;\n    margin-top:6px; letter-spacing:.02em;\n  }\n\n  /* image-over-gradient loading pattern */\n  .art{position:relative; overflow:hidden;}\n  .art img{\n    position:absolute; inset:0; width:100%; height:100%;\n    object-fit:cover; opacity:0; transition:opacity .4s ease;\n  }\n  .art img.loaded{opacity:1;}\n\n  /* section spacing rhythm */\n  section{padding:96px 0;}\n  .section-head{\n    display:flex; justify-content:space-between; align-items:baseline;\n    margin-bottom:44px; gap:24px;\n  }\n  .section-head h2{font-size:clamp(24px,2.6vw,32px);}\n  .section-head .view-all{font-size:14px; border-bottom:1px solid var(--ink); padding-bottom:2px;}\n\n  /* story section */\n  .story{background:var(--paper); border-top:1px solid var(--line); border-bottom:1px solid var(--line);}\n  .story .wrap{display:grid; grid-template-columns:0.85fr 1fr; gap:72px; align-items:center;}\n  .story-image{\n    aspect-ratio:4/5; padding:14px; background:var(--canvas); border:1px solid var(--line);\n  }\n  .story-image .art{\n    width:100%; height:100%;\n    background:\n      radial-gradient(120% 90% at 25% 15%, #a487b8 0%, transparent 55%),\n      radial-gradient(100% 100% at 75% 80%, #263a2e 0%, transparent 60%),\n      linear-gradient(160deg, #6a7fae 0%, #4a5f8f 30%, #2f3a54 60%, #1b2233 100%);\n  }\n  .story-text .quote{\n    font-size:clamp(22px,2.4vw,29px); line-height:1.32; max-width:19ch; margin-bottom:28px;\n  }\n  .story-text p{font-size:15.5px; line-height:1.7; max-width:52ch; color:#3c4239; margin:0 0 16px;}\n  .story-text .sign{font-size:14px; margin-top:20px; color:var(--moss); font-weight:500;}\n\n  /* products */\n  .grid{display:grid; grid-template-columns:repeat(4, 1fr); gap:36px 28px;}\n  .card-frame{\n    background:var(--canvas); border:1px solid var(--line); padding:10px;\n    aspect-ratio:4/5; margin-bottom:16px;\n  }\n  .card-frame .art{width:100%; height:100%;}\n  .p1{background:linear-gradient(155deg,#e8c9a0,#c98a5a 45%,#7c4a34 100%);}\n  .p2{background:radial-gradient(120% 90% at 30% 20%, #f2e3b8, transparent 55%), linear-gradient(160deg,#9db08a,#4c6b52 60%,#233326);}\n  .p3{background:linear-gradient(150deg,#e7dce8,#a487b8 45%,#4a3a5c 100%);}\n  .p4{background:radial-gradient(120% 90% at 70% 20%, #f6d9c4, transparent 55%), linear-gradient(160deg,#7a92ab,#3c5068 55%,#1b2433);}\n  .product-name{font-size:15px; font-weight:500; margin-bottom:3px;}\n  .product-meta{font-size:12.5px; color:#7a7a70; margin-bottom:10px;}\n  .product-row{display:flex; justify-content:space-between; align-items:center;}\n  .price{font-size:14.5px; font-weight:500;}\n  .add{\n    font-size:13px; display:flex; align-items:center; gap:6px; cursor:pointer;\n    border-bottom:1px solid var(--ink); padding-bottom:1px;\n  }\n\n  /* newsletter */\n  .newsletter{background:var(--moss-dark); color:var(--canvas);}\n  .newsletter .wrap{\n    display:flex; justify-content:space-between; align-items:center; gap:40px; flex-wrap:wrap;\n  }\n  .newsletter h2{color:var(--canvas); font-size:clamp(22px,2.4vw,28px); max-width:18ch;}\n  .newsletter p{color:#cfd9cf; font-size:14.5px; margin-top:10px; max-width:38ch;}\n  .nform{display:flex; gap:0; min-width:340px;}\n  .nform input{\n    background:transparent; border:1px solid #6a7d6a; border-right:none;\n    padding:13px 16px; color:var(--canvas); font-family:inherit; font-size:14px; flex:1;\n  }\n  .nform input::placeholder{color:#a9baa9;}\n  .nform button{\n    background:var(--canvas); color:var(--moss-dark); border:1px solid var(--canvas);\n    padding:13px 20px; font-size:14px; font-weight:500; cursor:pointer;\n  }\n\n  /* footer */\n  footer{padding:64px 0 32px;}\n  .foot-top{\n    display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:32px; padding-bottom:48px;\n  }\n  .foot-top .wordmark{display:block; margin-bottom:10px;}\n  .foot-top p{font-size:13.5px; color:#7a7a70; max-width:28ch; line-height:1.6;}\n  .foot-col h3{font-size:13px; font-weight:500; margin-bottom:14px; color:#7a7a70;}\n  .foot-col a{display:block; font-size:14px; margin-bottom:10px; color:var(--ink); opacity:.85;}\n  .foot-col a:hover{opacity:1;}\n  .foot-bottom{\n    display:flex; justify-content:space-between; align-items:center;\n    border-top:1px solid var(--line); padding-top:24px; font-size:13px; color:#8a8a80;\n  }\n  .back-top{border-bottom:1px solid #8a8a80; padding-bottom:1px;}\n\n  @media (max-width:900px){\n    .story .wrap{grid-template-columns:1fr; gap:36px;}\n    .grid{grid-template-columns:repeat(2,1fr);}\n    .foot-top{grid-template-columns:1fr 1fr;}\n    .nav-left{display:none;}\n  }\n"
        }}
    />
    <header>
        <div className="nav">
            <div className="nav-left">
                <a href="#">Shop</a>
                <a href="#">Originals</a>
                <a href="#">Story</a>
                <a href="#">Contact</a>
            </div>
            <div className="wordmark">Sonia’s Art</div>
            <div className="nav-right">
                <button className="icon-btn" aria-label="Search">
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    >
                        <circle cx={11} cy={11} r={7} />
                        <line x1={21} y1={21} x2="16.6" y2="16.6" />
                    </svg>
                </button>
                <button className="icon-btn" aria-label="Account">
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    >
                        <circle cx={12} cy={8} r={4} />
                        <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
                    </svg>
                </button>
                <button
                    className="icon-btn"
                    aria-label="Cart"
                    style={{ position: "relative" }}
                >
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    >
                        <path d="M6 8h12l-1 12H7L6 8z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                    <span className="cart-count">2</span>
                </button>
            </div>
        </div>
    </header>
    <section className="hero" style={{ padding: 0 }}>
        <img
            src="assets/IMG_9925.jpeg"
            alt="Featured painting"
            className="hero-img"
            onload="this.classList.add('loaded')"
            onerror="this.style.display='none'"
        />
        <div className="hero-content">
            <h1>Paintings that hold onto a moment longer than a photograph could.</h1>
            <p>
                Original, one-of-a-kind work from a small studio in New Jersey — each
                piece made slowly, by hand, and sold once.
            </p>
            <a href="#" className="btn light">
                View the collection
                <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <line x1={5} y1={12} x2={19} y2={12} />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </a>
        </div>
        <div className="plate">
            <span className="num">07 / 12</span>
            <span>Cold Front, 2026 — oil on linen</span>
        </div>
    </section>
    <section className="story">
        <div className="wrap">
            <div className="story-image">
                <div className="art">
                    <img
                        src="assets/IMG_9920.jpeg"
                        alt="Sonia's painting featured in the studio story"
                        onload="this.classList.add('loaded')"
                        onerror="this.remove()"
                    />
                </div>
            </div>
            <div className="story-text">
                <p className="quote display">
                    Why do certain images stay with us? Not just visually, but emotionally
                    — something feels romantic, or heavy, or quietly familiar, even from a
                    completely different time.
                </p>
                <p>
                    Sonia trained as a visual historian before she became a painter, and
                    it shows in the work: every piece starts from a real place or a
                    half-remembered one, then gets rebuilt from color and instinct rather
                    than reference photos.
                </p>
                <p>
                    The studio is small on purpose. Paintings are made one at a time, and
                    each one leaves once — there are no reprints and no editions.
                </p>
                <div className="sign">— Sonia, founder</div>
            </div>
        </div>
    </section>
    <section>
        <div className="wrap">
            <div className="mood-strip">
                <h2>New arrivals</h2>
                <div className="moods">
                    <span className="mood-pill active">All</span>
                    <span className="mood-pill">Moody + blue</span>
                    <span className="mood-pill">Warm + earthbound</span>
                    <span className="mood-pill">Quiet + minimal</span>
                </div>
            </div>
            <div className="grid">
                <div>
                    <div className="card-frame">
                        <div className="art p1">
                            <img
                                src="assets/IMG_9925.jpeg"
                                alt="Low Tide, Sandy Hook"
                                onload="this.classList.add('loaded')"
                                onerror="this.remove()"
                            />
                        </div>
                    </div>
                    <div className="product-name">Low Tide, Sandy Hook</div>
                    <div className="product-meta">Oil on canvas · 16 × 20 in</div>
                    <div className="product-mood">warm + earthbound</div>
                    <div className="product-row">
                        <span className="price">$420</span>
                        <span className="add">Add to cart</span>
                    </div>
                </div>
                <div>
                    <div className="card-frame">
                        <div className="art p2">
                            <img
                                src="assets/IMG_9919.jpeg"
                                alt="Understory"
                                onload="this.classList.add('loaded')"
                                onerror="this.remove()"
                            />
                        </div>
                    </div>
                    <div className="product-name">Understory</div>
                    <div className="product-meta">Acrylic on panel · 20 × 24 in</div>
                    <div className="product-mood">quiet + minimal</div>
                    <div className="product-row">
                        <span className="price">$560</span>
                        <span className="add">Add to cart</span>
                    </div>
                </div>
                <div>
                    <div className="card-frame">
                        <div className="art p3">
                            <img
                                src="assets/IMG_9922.jpeg"
                                alt="Dusk, Route 9"
                                onload="this.classList.add('loaded')"
                                onerror="this.remove()"
                            />
                        </div>
                    </div>
                    <div className="product-name">Dusk, Route 9</div>
                    <div className="product-meta">Oil on canvas · 18 × 24 in</div>
                    <div className="product-mood">moody + blue</div>
                    <div className="product-row">
                        <span className="price">$480</span>
                        <span className="add">Add to cart</span>
                    </div>
                </div>
                <div>
                    <div className="card-frame">
                        <div className="art p4">
                            <img
                                src="assets/IMG_9918.jpeg"
                                alt="Cold Front"
                                onload="this.classList.add('loaded')"
                                onerror="this.remove()"
                            />
                        </div>
                    </div>
                    <div className="product-name">Cold Front</div>
                    <div className="product-meta">Oil on linen · 24 × 30 in</div>
                    <div className="product-mood">moody + blue</div>
                    <div className="product-row">
                        <span className="price">$640</span>
                        <span className="add">Add to cart</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="newsletter">
        <div className="wrap">
            <div>
                <h2 className="display">Join the collectors list</h2>
                <p>
                    One email when a new piece is finished, plus 10% off your first
                    painting. No schedule, no spam.
                </p>
            </div>
            <form className="nform" onsubmit="return false;">
                <input type="email" placeholder="Email address" required="" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
    <footer>
        <div className="wrap">
            <div className="foot-top">
                <div>
                    <span className="wordmark">Sonia’s Art</span>
                    <p>
                        Original paintings from a small studio in New Jersey. Made slowly,
                        sold once.
                    </p>
                </div>
                <div className="foot-col">
                    <h3>Shop</h3>
                    <a href="#">New arrivals</a>
                    <a href="#">All originals</a>
                    <a href="#">Sold archive</a>
                </div>
                <div className="foot-col">
                    <h3>Studio</h3>
                    <a href="#">Our story</a>
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
                <span>© 2026 Sonia’s Art</span>
                <a href="#" className="back-top">
                    Back to top ↑
                </a>
            </div>
        </div>
    </footer>
</>
