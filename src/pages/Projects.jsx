import "../styles/Projects.css";
import deliveryapp from "../assets/deliveryapp.gif";
import todocalendar from "../assets/todocalendar.gif";
import apodnasa from "../assets/APOD-NASA.gif";

const Projects = () => {
    return (
        <>
            <section className="projects-section" id="projects">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img src={deliveryapp} alt="Imagem do Projeto" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Delivery App</h3>
                            <p className="project-description">Complete system for online order management.</p>
                            <p className="project-description">Features: User login, shopping cart, administrative panel to manage products and users.</p>
                            <p className="project-description">Technologies: Node.js · Typescript · React.js · MySQL · Sequelize · Docker</p>
                            <div className="project-links">
                                <a href="https://github.com/AlineCarolina/Delivery-App/tree/master" className="project-link" target="_blank">See on github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={apodnasa} alt="Imagem do Projeto" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Astronomy Picture of the Day - NASA</h3>
                            <p className="project-description">Web application that consumes NASA&#39;s official APOD API.</p>
                            <p className="project-description">Features: Display a daily astronomical image of the day and a brief explanation from a professional astronomer. There is also a calendar where you can choose any date from 1995 onwards to display the photo of the day.</p>
                            <p className="project-description">Technologies: React · Vite · TailwindCSS · tsParticles · NASA APOD API · Vercel</p>
                            <div className="project-links">
                                <a href="https://astro-view.vercel.app/" className="project-link">See deploy</a>
                                <a href="https://github.com/AlineCarolina/AstroView" className="project-link">See on github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={todocalendar} alt="Imagem do Projeto" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Calendar ToDoList</h3>
                            <p className="project-description">In this project, a SPA of a task calendar was developed.</p>
                            <p className="project-description">Features: a calendar where you can select a date to add a new task,
                                register a new task in the database, edit and delete selected tasks</p>
                            <p className="project-description">Technologies: MongoDB · Docker · ESLint · Node.js · Express.js · Chai · Mocha · react-calendar · React.js · HTML · CSS</p>
                            <div className="project-links">
                                <a href="https://github.com/AlineCarolina/Calendar-ToDoList?tab=readme-ov-file" className="project-link">See on github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;

