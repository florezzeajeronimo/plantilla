function BotonPersonalizado({texto, color, onClick}) {
    return (
        <button
        style={{
            backgroundColor: color || 'grey',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }} onClick={onClick}>
            {texto}
        </button>
    );
}

export default BotonPersonalizado;
