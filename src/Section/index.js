import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">{title}</h2>
                {extraHeaderContent}
        </header>

        <section className="section__item">
            {body}
        </section>
    </section>
);

export default Section