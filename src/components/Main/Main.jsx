import { Router } from "@reach/router";
import MainServis from "./MainServis/MainServis";
import MainGlobal from "./MainGlobal/MainGlobal";
import MainCompany from "./MainCompany/MainCompany";
import MainBuy from "./MainBuy/MainBuy";
import MainContact from "./MainContact/MainContact";
import MainProjects from "./MainProjects/MainProjects"; 
import MainPodbor from "./MainPodbor/MainPodbor";

const Main = (props) => {
    return (
        <Router>
            <MainGlobal path="/" />
            <MainCompany path="companypage" />
            <MainServis path="servispage" />
            <MainProjects path="projectspage" />
            <MainBuy path="buypage" />
            <MainContact path="contactpage" />
            <MainPodbor path="podborpage" />
        </Router>
    );
}

export default Main;