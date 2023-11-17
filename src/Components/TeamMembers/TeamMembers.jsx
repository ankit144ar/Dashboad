import Navbar from "../Navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import "./teamMembers.css";

function TeamMembers() {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "job", headerName: "Job", width: 180 },
    { field: "skills", headerName: "Skills", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
        field: "action",
        headerName: "Active",
        width: 130,
        renderCell:(params)=>{
            return(
                <button className="userListEdit" type="button">Edit</button>
            )
        }
      },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 , job: "Software Developer" , skills: "React Developer"},
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 , job: "Software Developer" , skills: "React Developer"},
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 , job: "Software Developer" , skills: "React Developer"},
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 , job: "Software Developer" , skills: "React Developer"},
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null , job: "Software Developer" , skills: "React Developer"},
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , skills: "React Developer"},
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 , job: "Software Developer" , skills: "React Developer"},
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 , job: "Software Developer" , skills: "React Developer"},
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 , job: "Software Developer" , skills: "React Developer" },
    { id: 10, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , skills: "React Developer"},
    { id: 11, lastName: "Snow", firstName: "Jon", age: 35 , job: "Software Developer" , skills: "React Developer"},
    { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 , job: "Software Developer" , skills: "React Developer"},
    { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 , job: "Software Developer" , skills: "React Developer"},
    { id: 14, lastName: "Stark", firstName: "Arya", age: 16 , job: "Software Developer" , skills: "React Developer"},
    { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null , job: "Software Developer" , skills: "React Developer"},
    { id: 16, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , skills: "React Developer"},
    { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 , job: "Software Developer" , skills: "React Developer"},
    { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 , job: "Software Developer" , skills: "React Developer"},
    { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 , job: "Software Developer" , skills: "React Developer" },
  ];

  return (
    <div className="teamMembers">
      <Navbar />
      <div style={{ height: "95vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 6 },
            },
          }}
          pageSizeOptions={[6, 12, 18]}

          checkboxSelection
        />
      </div>
    </div>
  );
}

export default TeamMembers;
