export default function ({ pNome, pCognome }) {

    const pId = `${pNome}${pCognome}`
    return (
        <>
            <div className="accordion w-100" id={`accordion-${pId}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${pId}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${pId}`}
                        >
                            {pNome}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${pId}`}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#accordion-${pId}`} // parent is unique
                    >
                        <div className="accordion-body">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestiae? {/* Nested accordion here, with its own unique IDs */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}