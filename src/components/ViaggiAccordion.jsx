import PartecipantiDialog from "./PartecipantiDialog"
import viaggi from '../data/viaggi'

export default function ViaggiAccordion() {
    return (
        <div className="accordion" id="accordionExample">
            {viaggi.map((viaggio) => (
                <div className="accordion-item" key={viaggio.id}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${viaggio.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse${viaggio.id}`}
                        >
                            {viaggio.nome}
                        </button>
                    </h2>

                    <div
                        id={`collapse${viaggio.id}`}
                        className="accordion-collapse collapse "
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{viaggio.desc}</strong>
                                <br />
                                {viaggio.dataInizio} → {viaggio.dataFine}
                            </div>
                        <PartecipantiDialog viaggioId={viaggio.id} viaggi={viaggi}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}