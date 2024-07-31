import './skills.css';
import Frontend from '../../assets/webDev.png'
import Backend from '../../assets/backend.png'
import Api from '../../assets/api.png'
import Db from '../../assets/database.png'
import Git from '../../assets/version-control.png'
import Devops from '../../assets/devops2.png'
import Security from '../../assets/security.png'


function skills() {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do      </span>
      <span className="skillDescription">As a passionate fullstack web developer, I create dynamic and responsive web apps and websites. I handle both front-end and back-end development, ensuring smooth user experiences and strong functionality. I stay updated with the latest technologies to deliver high-quality solutions. Whether building from scratch or improving existing projects, I enjoy bringing ideas to life with precision and creativity</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Frontend} alt="WebDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p> HTML, CSS, JavaScript, React, Responsive Design using Bootstrap, Flexbox, CSS Grid</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Backend} alt="AppDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>Node.js, Python, Java, Spring Boot, Microservices using queue messaging systems like Celery , Redis. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Db} alt="ApiIntegration" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Databases</h2>
            <p>Relational Databases: MySQL, PostgreSQL, MariaDB. NoSQL Databases: MongoDB, Redis.  Database Design & Management: Understanding normalization, indexing, and query optimization. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Api} alt="ApiIntegration" className="skillBarImg" />
          <div className="skillBarText">
            <h2>API Development & Integration</h2>
            <p>RESTful Services: Creating and consuming REST APIs.</p>
            <p>Authentication and Authorization: OAuth, JWT, and other methods.</p>
            <p>API Documentation and Testing: Swagger, Postman.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Git} alt="ApiIntegration" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Version Control Systems</h2>
            <p>Using Git for version control.</p>
            <p>Repository Hosting Services: Github, GitLab, Bitbucket.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Devops} alt="ApiIntegration" className="skillBarImg" />
          <div className="skillBarText">
            <h2>DevOps and Deployment</h2>
            <p>CI/CD : Jenkins, Github Actions.</p>
            <p>Containerization: Docker.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Security} alt="ApiIntegration" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Security</h2>
            <p>Web Security Fundamentals: Understanding common security threats like XSS, CSRF, SQL Injection and how to mitigate them.</p>
            <p>SSL/TLS: Implementing HTTPS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills;