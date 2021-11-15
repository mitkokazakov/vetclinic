import 'bootstrap/dist/css/bootstrap.min.css';

function ListAllUsers() {

    return (

        <table className="table table-striped table-hover col-md-6">
            <thead className="thead-dark">
                <tr>
                    <th>Owner's Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mitko Kazakov</td>
                    <td>Stara Zagora, Samara 3 ap.68 et.B</td>
                </tr>
                <tr>
                    <td>Mitko Kazakov</td>
                    <td>Stara Zagora, Samara 3 ap.68 et.B</td>
                </tr>
                <tr>
                    <td>Mitko Kazakov</td>
                    <td>Stara Zagora, Samara 3 ap.68 et.B</td>
                </tr>
            </tbody>
        </table>

    );
}

export default ListAllUsers;