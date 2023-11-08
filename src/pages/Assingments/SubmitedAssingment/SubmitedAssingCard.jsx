import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SubmitedAssingCard = ({ assing }) => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const { _id, photo, name, mark, descrip, loginEmail, loginName, status } = assing;
    console.log(assing);

    return (
        <tbody>

            {
                status ?
                    <tr></tr>
                    :
                    <tr>
                        <td>{name}</td>
                        <td>{loginName}</td>
                        <td>{mark}</td>
                        <td>
                            {
                                user?.email === loginEmail ? <p>You Can not mark your Assingment</p> :
                                    <Link to={`/submitedAssingment/${_id}`}><button className="btn btn-primary">Give Mark</button></Link>
                            }
                        </td>
                    </tr>
            }



        </tbody>

    );
};

export default SubmitedAssingCard;