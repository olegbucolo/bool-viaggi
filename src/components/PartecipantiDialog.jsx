import partecipanti from '../data/partecipanti'
import PartecipanteInfo from './PartecipanteInfo';
import { useState } from 'react'


export default function PartecipantiDialog({ viaggioId, viaggi }) {
    const [search, setSearch] = useState('')
    const modalId = `staticBackdrop-${viaggioId}a`;

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const filteredPartecipanti = partecipanti.filter(p => p.viaggioId.includes(Number(viaggioId))
        && (p.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || p.cognome.toLowerCase().includes(search.toLowerCase())))
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            >
                Partecipanti
            </button>

            <div
                className="modal fade my-scrollbar"
                id={modalId}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                Lista Partecipanti
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        <div className="d-flex mx-3 mt-3" >
                            <input
                                value={search}
                                onChange={handleSearch}
                                className="form-control"
                                type="text"
                                placeholder="Cerca Partecipanti..."
                            />
                        </div>

                        <div className="modal-body ">
                            {filteredPartecipanti.map(p => (
                                <div key={p.id} className="d-flex justify-content-between align-items-center mb-2">
                                    <PartecipanteInfo p={p} />
                                </div>
                            ))}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Esci
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}