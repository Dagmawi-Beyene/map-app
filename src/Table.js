import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";


const Table = props => {
  const [gridData] = useState({
    data: props.data,
    columns: props.col,
    resolve: () => {},
    updatedAt: new Date()
  });

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  
  return (
    <>
    {
      console.log(props.data)
    }
      <MaterialTable
        title="Random Addresses"
        columns={gridData.columns}
        data={props.data}
        options = {{
            sorting: true
        }}
        
        
      />
    </>
  );
};

export default Table;
