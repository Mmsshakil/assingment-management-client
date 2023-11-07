
const MyAssingmentCard = ({ assingment }) => {

    const { photo, name, mark, descrip, loginEmail } = assingment;


    return (

        <tr>

            <td>{name}</td>
            <td>{mark}</td>
            <td>Blue</td>
        </tr>
    );
};

export default MyAssingmentCard;