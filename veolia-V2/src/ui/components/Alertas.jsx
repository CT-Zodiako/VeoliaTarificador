export const Alertas = ({ alerta, onCerrarAlerta }) => {
    return(
    <>
        <div className="fixed top-14 right-4 z-50 space-y-2">
            {alerta.length > 0 &&
            alerta.map((alert) => (
            <div 
                key={alert.id}
                id="alert-1" 
                className={`flex items-center p-4 rounded-lg shadow-lg ${
                    alert.tipo === "success"
                    ? "bg-green-100 text-green-800"
                    : alert.tipo === "error"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                } w-[20rem]`}
                role="alert"
            >
                <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium mr-1">
                    {alert.mensaje}
                </div>
                    <button 
                        type="button" 
                        className={`ms-auto -mx-1.5 -my-1.5 
                            ${
                                alert.tipo === "success"
                                ? "bg-green-100 text-green-800"
                                : alert.tipo === "error"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            } 
                            rounded-lg focus:ring-2 
                            ${
                                alert.tipo === "success"
                                ? "hover:bg-green-300 focus:ring-green-800"
                                : alert.tipo === "error"
                                ? "hover:bg-red-300 focus:ring-red-800"
                                : "hover:bg-blue-300 focus:ring-blue-800"
                            } 
                            inline-flex items-center justify-center h-8 w-8`} 
                        data-dismiss-target="#alert-1" 
                        aria-label="Close" 
                        onClick={() => onCerrarAlerta(alert.id)}
                    >
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            ))}
        </div>
    </>
  )
};