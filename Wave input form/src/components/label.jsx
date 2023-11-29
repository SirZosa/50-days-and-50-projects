export default function Label({children, ...rest}){
    const label = (newArr) =>{
        const Arr = []
        for(let i = 0; i< newArr.length; i++){
            Arr.push(<span key={i} style={{transitionDelay: `${i*50}ms`}}>{newArr[i]}</span>)
        }
        return Arr
    }
    return(
        <label {...rest}>
            {label(children)}
        </label>
    )
}