import { Table } from "react-bootstrap";

 export const TablaComponentes = ({colums, data}) => {
return (
    <div className='container'>
      <div style={{ overflowX: 'auto', overflowX: 'auto', maxHeight: '40rem' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              {colums &&
                colums.map((item, index) => (
                  <th key={index}>{item.head}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  {colums.map((body, colIndex) => (
                    <td key={colIndex}>{item[body.body]}</td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};