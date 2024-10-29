import { useState } from "react"

const FilterTechButton = ({ techs }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedTech, setSelectedTech] = useState(null)

    const handleTechClick = (tech) => {
        setSelectedTech(tech)
        setIsOpen(false)
    }

    return (
        <div className="flex  relative">
            <button
                id=""
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-dark  hover:bg-primary rounded-md border border-primary transition-all"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedTech ? selectedTech : "Elegir tecnología"}
                <svg
                    aria-hidden="true"
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                id=""
                className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 top-full mt-2 left-0 dark:bg-gray-700 ${isOpen ? "absolute" : "hidden"}`}
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                    <li>
                        <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 transition-all hover:text-white hover:bg-primary "
                            onClick={() => handleTechClick(null)}
                        >
                            <div className="inline-flex items-center">
                                Elegir tecnología
                            </div>
                        </button>
                    </li>
                    {
                        techs.map((tech) => (
                            <li key={tech.name}>
                                <button
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 transition-all hover:text-white hover:bg-primary"
                                    onClick={() => handleTechClick(tech.name)}
                                >
                                    <div className="inline-flex items-center">
                                        {tech.name}
                                    </div>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterTechButton