import { useEffect, useState } from "react"
import { apsAsignadas } from "../services/usuariosService"


export const AsignacionAPS = () => {

  const [asignadas, setAsignadas] = useState([])
  const [sinAsignar, setSinAsignar] = useState([])


  const fetchData = async () => {
    try {
      const sisuID ={
        sisuId:53
      }


      const response = await apsAsignadas(sisuID);


      setAsignadas(response.apsAsignadas)
      setSinAsignar(response.apsSinAsignar)
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {

    fetchData()
  }, [])
  


  return (
    <>
    <div className='row'>

        <div className='col' style={{border:"3px solid red"}}>
            <h3>Sin asignar</h3>

          {
            sinAsignar.map((item) => (
            <div key={item.APSA_ID}>
              <input
                type="checkbox"
                id={`checkbox-${item.APSA_ID}`}
                value={item.APSA_ID}
              />
              <label htmlFor={`checkbox-${item.APSA_ID}`}>{item.APSA_NOMAPS}</label>
            </div>
            ))
          }
           


        </div>

        <div className='col' style={{border:"3px solid green"}}><h3>Asignadas</h3>
            {
              asignadas.map((item)=>{
                return(
                  <div key={item.APSA_ID}>
                    <p>{item.APSA_NOMAPS}</p>
                  </div>
                )
              })
            }
            
        </div>
    </div>
    
    
    </>
  )
}
