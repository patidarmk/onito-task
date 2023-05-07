import { Link } from "react-router-dom";

const DisplayData = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link to="/">Home</Link>
      <table>
        <tr>
          <th>Name</th>
          <th>Age/Sex</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Govt ID</th>
          <th>Guardian Details</th>
          <th>Nationality</th>
        </tr>
        {data &&
          data.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>
                  {user.dob} / {user.gender}
                </td>
                <td>{user.mobile}</td>
                <td>
                  {user.address} {user.state} {user.country}
                </td>
                <td>
                  {user.govIdType} {user.govIdValue}
                </td>
                <td>
                  {user.guardianLabel} {user.guardianName}
                </td>
                <td>{user.nationality}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default DisplayData;
