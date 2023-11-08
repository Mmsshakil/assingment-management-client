import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyAssingmentCard = ({ assingment }) => {

    const { photo, name, mark, descrip, loginEmail, status, finalMark, finalFeedback } = assingment;

    const { user } = useContext(AuthContext);
    const userMail = user?.email;
    console.log(loginEmail, userMail);


    return (
        <tbody>
            {loginEmail === userMail ? (
                <tr>
                    <td>{name}</td>
                    <td>{mark}</td>
                    <td>{finalMark}</td>
                    <td>{finalFeedback}</td>
                    { status === "confirm" ? <td>Completed</td> :
                        <td>Pending</td>
                    }
                </tr>
            ) : (
                <></>
            )}

        </tbody>


    );
};

export default MyAssingmentCard;