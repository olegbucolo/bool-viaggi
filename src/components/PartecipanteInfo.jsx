export default function ({ p }) {

    const pId = `${p.nome}${p.cognome}`
    return (
        <>
            <div className="accordion w-100" id={`accordion-${pId}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header my-image-card">
                        <button
                            className="accordion-button "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${pId}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${pId}`}
                        >
                            {p.nome} {p.cognome}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${pId}`}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#accordion-${pId}`} // parent is unique
                    >
                        <div className="accordion-body">
                            <p><span className="fw-bold">Email:</span> {p.email} </p>
                            <p><span className="fw-bold">Telefono:</span> {p.telefono} </p>
                            <p><span className="fw-bold">Codice Fiscale:</span> {p.codiceFiscale} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}