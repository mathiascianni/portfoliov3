import { formatDescription } from "../../ui/textFormatter"
const WorkMiniCard = ({ work }) => {
    const formattedDescription = formatDescription(work.description);
    return (

        <a
            href={work.slug}
            className="border border-primary rounded-sm p-8 group flex flex-col gap-8 relative overflow-hidden font-light"
        >
            <div
                className="bg-primary w-full h-full absolute top-0 -right-[100%] group-hover:right-0 duration-500 transition-all"
            >
            </div>
            <div className="z-10">
                <h3 className="font-title text-4xl line-clamp-1">
                    {work.title}
                </h3>
                <div
                    className="flex gap-2 items-center text-gray-500 group-hover:text-white transition-all delay-100 duration-500"
                >
                    <p>
                        {work.type}
                    </p>
                    <span>&mdash;</span>
                    <p className="text-sm">
                        {work.typeOfWork}
                    </p>
                </div>
            </div>
            <div
                className="h-[1px] w-[20%] bg-primary group-hover:bg-white group-hover:w-[60%] duration-500 transition-all z-10"
            >
            </div>
            <p className="line-clamp-3 z-10 text-lg">{formattedDescription.map((desc, index) => <span key={index}>{desc.text}</span>)}</p>
            <div className="flex justify-between z-10">
                <p
                    className="text-gray-500 group-hover:text-white transition-all delay-100 duration-500"
                >
                    {work.date}
                </p>
                <p className="font-medium flex items-center gap-2">Ver proyecto <svg className="fill-current h-4 w-4 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" width="24" height="24" viewBox="0 0 24 24" ><g clip-path="url(#a)"><path fill-rule="evenodd" d="M20.265.168a2.777 2.777 0 0 1 3.56 3.559L17.698 22.09a2.776 2.776 0 0 1-2.002 1.833 2.743 2.743 0 0 1-2.606-.744l-3.288-3.273-3.452 1.787a.856.856 0 0 1-1.252-.784l.143-5.458 12.077-8.772a1.072 1.072 0 0 0-1.26-1.735L3.777 13.865.81 10.9a2.743 2.743 0 0 1-.75-2.48 2.777 2.777 0 0 1 1.833-2.122H1.9L20.263.167l.002.001Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg></p>
            </div>
        </a>

    )
}

export default WorkMiniCard