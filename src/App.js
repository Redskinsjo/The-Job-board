import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <div className="super-container">
        <Job
          className="red-square"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        ></Job>
        <Job
          className="green-square"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
        <Job
          className="yellow-square"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="blue-square"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="pink-square"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="red-square"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        ></Job>
        <Job
          className="green-square"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        ></Job>
        <Job
          className="yellow-square"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        ></Job>
        <Job
          className="blue-square"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
      </div>
      <Footer />
    </div>
  );
}

export default App;
