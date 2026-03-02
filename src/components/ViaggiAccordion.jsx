import PartecipantiDialog from "./PartecipantiDialog"
import viaggi from '../data/viaggi'

export default function ViaggiAccordion() {
    return (
        <div className="mx-auto accordion mt-4" style={{ maxWidth: '800px' }}  id="accordionExample">
            {viaggi.map((viaggio) => (
                <div className="accordion-item rounded-2 mb-2" key={viaggio.id}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button rounded-2 collapsed"
                            type="button"
                            style={{
                                backgroundColor: 'white',
                                height: '100px',
                                backgroundImage: `linear-gradient(to right, rgba(255,255,255,1), rgba(0,0,0,0)), url('https://picsum.photos/400/200?random=${viaggio.id}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
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
                        <div className="accordion-body  d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{viaggio.desc}</strong>
                                <br />
                                {viaggio.dataInizio} → {viaggio.dataFine}
                            </div>
                            <PartecipantiDialog viaggioId={viaggio.id} viaggi={viaggi} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}