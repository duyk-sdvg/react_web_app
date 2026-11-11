export function LoadScreen(){
    return(
        <div className="flex flex-col items-center gap-15 w-full animate-pulse">
            <div className="w-full max-w-70 h-20 bg-blue-400 rounded-full"></div>
            <div className="w-full max-w-125 h-35 bg-blue-400 rounded-full"></div>
            <div className="flex w-full gap-3 justify-center">
                <div className="w-full max-w-45 h-15 bg-blue-400 rounded-xl"></div>
                <div className="w-full max-w-45 h-15 bg-blue-400 rounded-xl"></div>
                <div className="w-full max-w-45 h-15 bg-blue-400 rounded-xl"></div>
            </div>

            <div className="w-full h-55 bg-blue-400 rounded-xl"></div>
            <div className="w-full h-55 bg-blue-400 rounded-xl"></div>
        </div>
    )}