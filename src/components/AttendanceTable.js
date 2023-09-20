import React from "react";
import DataTable from "react-data-table-component";

function AttendanceTable(props) {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Check In",
      selector: (row) => row.check_in,
    },
    {
      name: "Check Out",
      selector: (row) => row.checkout,
    },
    {
      name: "Total Hours",
      selector: (row) => row.total_hours,
    },
    {
      name: "Attendance Data",
      selector: (row) => row.attendance_date,
    },
  ];
  const data =
    props.data.length > 0 &&
    props.data.map((item) => {
      return {
        id: item.id,
        name: item.employee.name,
        check_in: item.check_in ? item.check_in : "N/A",
        checkout: item.checkout ? item.checkout : "N/A",
        total_hours: item.total_hours,
        attendance_date: item.attendance_date,
      };
    });
  return <DataTable columns={columns} data={data} />;
}

export default AttendanceTable;
