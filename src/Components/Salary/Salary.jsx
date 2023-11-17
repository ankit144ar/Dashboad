import Navbar from "../Navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import "./Salary.css";

function Salary() {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "job", headerName: "Job", width: 180 },
    { field: "salaryCredited", headerName: "Salary", width: 100 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
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
        field: "payment",
        headerName: "Payment",
        width: 120,
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
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 , job: "Software Developer" , skalary: "$ 200,000", salaryCredited: "Credited"},
    { id: 10, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 11, lastName: "Snow", firstName: "Jon", age: 35 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 14, lastName: "Stark", firstName: "Arya", age: 16 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 16, lastName: "Melisandre", firstName: null, age: 150 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
    { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 , job: "Software Developer" , salary: "$ 200,000", salaryCredited: "Credited"},
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

export default Salary;
