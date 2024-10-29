import FiltersContainer from "./FiltersContainer"
import WorkCard from "./WorkCard"
import { Fragment } from "react/jsx-runtime"

const WorkSectionContainer = ({ works, children }) => {
    return (
        <div className="min-h-screen">
            <FiltersContainer />
            {
                works.map((work, i) => (
                    <Fragment key={i}>
                        <WorkCard client:load work={work} i={i} />
                        {i !== works.length - 1 && children}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default WorkSectionContainer