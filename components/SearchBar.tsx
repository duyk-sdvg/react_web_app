
interface SearchBarProps{
    
}


export default function SearchBar({onClick} : {onClick: (value: string) => void}){

    const handlerClick = function(){
        
    }

    return(
        <div>
            <label className="w-fit">
                <input className="bg-amber-700"/>
            </label>
            <button type="submit" onClick={handlerClick} className="bg-amber-950">Поиск</button>
        </div>
    )
}