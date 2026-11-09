export default function Counter()
{

    let count = 0;

    function inrCounyter()
    {
        count += 1;
        console.log(count);
    }

    return(
        <div>
            <h3>Count : {count}</h3>
            <button>Increase Counting</button>
        </div>
    )

}