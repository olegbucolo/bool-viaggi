const viaggi = [
    {
        id: "1",
        nome: "Bangladesh",
        desc: "Scoperta Bangladese",
        dataInizio: "21-01-2026",
        dataFine: "01-01-2026",

    },

    {
        id: "2",
        nome: "Giappone",
        desc: "Tour tra Tokyo e Kyoto",
        dataInizio: "05-03-2026",
        dataFine: "18-03-2026",
    },
    {
        id: "3",
        nome: "Canada",
        desc: "Avventura tra Toronto e cascate del Niagara",
        dataInizio: "10-04-2026",
        dataFine: "22-04-2026",
    },
    {
        id: "4",
        nome: "Brasile",
        desc: "Esplorazione di Rio e foresta amazzonica",
        dataInizio: "02-06-2026",
        dataFine: "15-06-2026",
    },
    {
        id: "5",
        nome: "Islanda",
        desc: "Viaggio tra ghiacciai e aurore boreali",
        dataInizio: "12-09-2026",
        dataFine: "25-09-2026",
    },
]


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
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>{viaggio.desc}</strong>
                            <br />
                            {viaggio.dataInizio} → {viaggio.dataFine}
                        </div>
                        <button>vai ai dettagli viaggio</button>
                    </div>
                </div>
            ))}
        </div>
    )
}