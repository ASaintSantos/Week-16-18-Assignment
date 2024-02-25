import React from 'react'
import Table from 'react-bootstrap/Table';

function TableAbout() {
  return (
      <div style={{padding:"55px"}}>
          <Table striped bordered hover variant='dark'>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Ministry</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Jacob</td>
                      <td>Sanchez</td>
                      <td>Elder</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Isaac</td>
                      <td>Garcia</td>
                      <td>Deacon</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Abraham</td>
                      <td>Smith</td>
                      <td>Usher</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Moses</td>
                      <td>Rogers</td>
                      <td>Greeter</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>John</td>
                      <td>Doe</td>
                      <td>Senior Pastor</td>
                  </tr>
              </tbody>
          </Table>
      </div>
  )
}

export default TableAbout