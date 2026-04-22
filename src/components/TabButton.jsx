import './TabButton.css';
export default function TabButton({children, onSelect, isSelected}) {
    function handleClick() {
        console.log('Hello World');
    }
    return(
        <li>
            <button  className ={isSelected ? 'actve' : ''} onClick ={onSelect}>{children}</button>
        </li>
    )
}