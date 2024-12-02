import { techs } from "../../ui/techs";
import FilterTechButton from "./FilterTechButton";


const FiltersContainer = ({selectedTech, setSelectedTech}) => {
    return (
        <div className="mb-16 lg:mb-desk flex flex-col lg:flex-row gap-8">
            <div className="text-3xl">Tecnología usada</div>
            <FilterTechButton techs={techs} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
        </div>

    )
}

export default FiltersContainer