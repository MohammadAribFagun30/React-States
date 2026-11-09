export default function Counter()
{

    let count = 0;

    function inrCount()
    {
        count += 1;
        console.log(count);
    }

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={inrCount}>Increase Counting</button>
        </div>
    )

}