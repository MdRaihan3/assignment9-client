import { useEffect, useState } from "react";
import Agent from "./Agent";
import { Helmet } from "react-helmet-async";

const Agents = () => {
    const [agents, setAgents] = useState([])
    useEffect(() => {
        fetch('agent.json')
            .then(res => res.json())
            .then(data => setAgents(data))
    }, [])
    console.log(agents)
    return (
        <div>
             <Helmet>
                <title>Agents</title>
            </Helmet>
            <div className=" grid grid-cols-2 gap-8">
               {
                agents.map(agent => <Agent key={agent.id} agent={agent}></Agent>)
               }
            </div>
        </div>
    );
};

export default Agents;