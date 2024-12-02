
import FiltersContainer from "./FiltersContainer"
import WorkCard from "./WorkCard"
import Divisor from "../General/Divisor"
import { useState, useEffect, Fragment } from "react"

const WorkSectionContainer = ({ works }) => {
    const [selectedTech, setSelectedTech] = useState(null)
    const [filteredWorks, setFilteredWorks] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const handleTech = (tech) => {
        setSelectedTech(tech)
    }

    useEffect(() => {
        if (selectedTech) {
            setFilteredWorks(works.filter((work) => work.techs.includes(selectedTech)))

        } else {
            setFilteredWorks(works)
        }
        setLoaded(true)
    }, [selectedTech])


    return (
        loaded && (
            <div className="min-h-screen">
                <FiltersContainer selectedTech={selectedTech} setSelectedTech={handleTech} />
                {
                    filteredWorks.length > 0 ? filteredWorks.map((work, i) => (
                        <Fragment key={i}>
                            <WorkCard work={work} i={i} />
                            {i !== filteredWorks.length - 1 && <Divisor />}
                        </Fragment>
                    )) :
                        <div className="">
                            <p className="text-5xl">Parece que todavía no he subido proyectos con esta tecnología</p>
                        </div>
                }
            </div>
        )
    )
}

export default WorkSectionContainer