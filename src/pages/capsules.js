import { useEffect, useState } from "react";
import { getCapsules } from "../services/capsules";

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const capsules = await getCapsules();
            console.log(capsules);
            setCapsules(capsules);
            return true;
        }
        fetchData();
    });
    return (
        <div>
            <div class="title center">
                Capsules
            </div>
            <a href="/" class="link">&#60;- Retour à l'accueil</a>
            <table class="table center">
                <thead>
                    <tr>
                    <th scope="col">Capsule serial</th>
                    <th scope="col">Status</th>
                    <th scope="col">Type</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        capsules.map((capsule) =>  
                        <tr>
                            <td>{capsule.capsule_serial}</td>
                            <td>{capsule.status}</td>
                            <td>{capsule.type}</td>
                            <td>{capsule.details}</td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Capsules;
