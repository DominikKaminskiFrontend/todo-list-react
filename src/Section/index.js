import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__buttons">
            <h2 className="section__title">{title}</h2>
                {extraHeaderContent}
        </div>

        <section className="section__item">
            {body}
        </section>
    </section>
);

export default Section