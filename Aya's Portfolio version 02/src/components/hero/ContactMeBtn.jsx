const ContactMeBtn = ({ children, link }) => {
    return (
        <a className="btn-secondary" role="button" href={link}>
            {children}
        </a>
    );
}

export default ContactMeBtn
