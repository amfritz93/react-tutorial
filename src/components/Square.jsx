export default function Square({value}) {

    const handleClick = () => {
        alert('Square ' + value + ' clicked!');
    }

    return <button className="square" onClick={handleClick}>{value}</button>;
}