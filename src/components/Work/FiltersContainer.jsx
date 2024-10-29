import { techs } from "../../ui/techs";
import FilterTechButton from "./FilterTechButton";


const FiltersContainer = () => {
    return (
        <div className="mb-desk flex gap-8">
            <div className="text-3xl">Tecnología usada</div>
            <FilterTechButton techs={techs} />
        </div>

    )
}

export default FiltersContainer