import { Container, TextField, Grid, Button } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import React, { useEffect, useState } from "react";
import classes from "./cssAdmin.module.css";
// import { getStockItem } from "../../action/stock";
const data = [
  {
    id: 11,
    partNo: 1222,
    partName: "www",
    quantity: "wwww",
    cPrice: "www",
  },
];
const ShowGuide = () => {
  const [allStockItem, setallStockItem] = useState([]);
  // useEffect(() => {
  // const daata = async () => {
  //   const allStock = await getStockItem();
  //   console.log(allStockItem.data);
  //   return allStock.data;
  // };
  // const alldata = daata();
  // setallStockItem(alldata);
  //});
  useEffect(() => {
    const daata = async () => {
      const allStock = [];
      const stockData = [];
      for (const key in allStock.data) {
        stockData.push({
          id: key,
          partNo: allStock.data[key].partNo,
          partName: allStock.data[key].partName,
          quantity: allStock.data[key].quantity,
          mPrice: allStock.data[key].mPrice,
          cPrice: allStock.data[key].cPrice,
        });
      }
      console.log(stockData);
      setallStockItem(data);
    };
    daata();
  }, []);
  let i = 1;
  const stockDataTable = () => {
    return allStockItem.map((data) => (
      <tr key={i}>
        <td>{i++}</td>
        <td>{data.partNo}</td>
        <td>{data.partName}</td>
        <td>{data.quantity}</td>
        <td>{data.mPrice}</td>
        <td>{data.cPrice}</td>
      </tr>
    ));
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Container className={classes.cont}>
        <h2 className={classes.head}>Guide Details</h2>
        <Grid container spacing={2} className={classes.tabecont}>
          <TableContainer>
            <Table
              striped
              bordered
              hover
              size="sm"
              responsive="xl"
              className={classes.tablecss}
            >
              <thead className={classes.tablehead} key={"header"}>
                <th>S.No.</th>
                <th>Guide No.</th>
                <th>Guide Name</th>
                <th>No. of Trips</th>
                <th>Photo</th>
                <th>Age</th>
                {/* <th>Remove</th> */}
              </thead>

              {/* {allStockItem.length !== 0 && stockDataTable} */}
              {!allStockItem.length ? <h3>No Data</h3> : stockDataTable()}
              {/* {Object.map} */}
              {/* {allStockItem.map((data) => (
                <tr>
                  <td>{data.partNo}</td>
                  <td>{data.partName}</td>
                  <td>{data.quantity}</td>
                  <td>{data.mPrice}</td>
                  <td>{data.cPrice}</td>
                </tr>
              ))} */}
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
};

export default ShowGuide;
