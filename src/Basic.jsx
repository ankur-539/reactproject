
const aaa = ()=> {
    alert("girl")
}


function Abc(){

    const abc = () => {
        alert("boy");
    }

    return (
        <div>
            <input type="button" value="boy" onClick={abc} />
            <input type="button" value="girl" onClick={aaa} />
        </div>
    )
}

export default Abc;