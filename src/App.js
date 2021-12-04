import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

function App() {
  const [tableData, setTableData] = useState([
    { name: "Raj",  Code:"CEP-20-EE", category: 40, Price: 500,  quantity: 78456 },
    { name: "Mohan",  Code:"CEP-20-EE", category: 35, Price: 500, quantity: 456125 },
    { name: "Sweety",  Code:"CEP-20-EE", category: 17, Price: 400, quantity: 458796 },
    { name: "Vikas",  Code:"CEP-20-EE", category: 20, Price: 500,  quantity: 874569 },
    { name: "Neha",  Code:"CEP-20-EE", category: 25, Price: 400,  quantity: 748521 },
    { name: "Mohan",  Code:"CEP-20-EE", category: 35, Price: 500, quantity: 456125 },
    { name: "Sweety",  Code:"CEP-20-EE", category: 17, Price: 400, quantity: 458796 },
    { name: "Vikas",  Code:"CEP-20-EE", category: 20, Price: 500,  quantity: 874569 },
    { name: "Raj",  Code:"CEP-20-EE", category: 40, Price: 500,  quantity: 78456 },
    { name: "Mohan",  Code:"CEP-20-EE", category: 35, Price: 500, quantity: 456125 },
    { name: "Sweety",  Code:"CEP-20-EE", category: 17, Price: 400, quantity: 458796 },
    { name: "Vikas",  Code:"CEP-20-EE", category: 20, Price: 500,  quantity: 874569 },
  ])
  const columns = [
    { title: "Name", field: "name", sorting: false, filtering: false },
    { title: "Code", field: "Code", align: "center", grouping: false },
    {
      title: "Category", field: "category", emptyValue: () => <em>null</em>,
      render: (rowData) => <div >{rowData.category }</div>,
       searchable: false, export: false
    },
    { title: "Price", field: "Price" },
    { title: "Quantity", field: "quantity", },
  ]
  return (
    <div className="App">

      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: false, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { color:"#000"}
        }}
        title="Product List"
        icons={{ Add: () => <AddIcon /> }} />

    </div>
  );
}

export default App;