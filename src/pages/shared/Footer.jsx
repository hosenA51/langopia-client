const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10 place-items-center">
            <aside>
                <img 
                className="w-20"
                src="https://i.ibb.co.com/YtzydMm/logo.png" alt="logo" />
                <p className="text-xl font-bold">
                    Langopia
                </p>
                <p>
                    Empowering Your Language Journey, <br /> One Lesson at a Time.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;