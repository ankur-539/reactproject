function Registerform() {
    return (
        <div className="design">
            <h1>Student Application Form</h1>
            <p>Please fill in the collage application form below if you want to attent our institution. Thank you!</p>
            <hr></hr>
            <fieldset>
                <legend><h2>Student Information</h2></legend>
                <h4>Name</h4>
                <input type="text" placeholder="Enter Name"></input>
                <h4>Date Of Birth</h4>
                <input type="date" placeholder="dd-mm-yyyy"></input>
                <h4>Phone</h4>
                <input type="text" placeholder="000 000 0000"></input>
                <h4>Email</h4>
                <input type="text" placeholder="Enter Email"></input>

            </fieldset>

            <fieldset>
                <legend><h2>Home Address</h2></legend>
                <input type="text" placeholder="Street Address"></input>
                <input type="text" placeholder="City" className="inline"></input>
                <input type="text" placeholder="State" className="inline"></input>
                <input type="text" placeholder="Zip Code" className="inline"></input>
                <input type="text" placeholder="Country" className="inline"></input>
            </fieldset>

            <fieldset>
                <legend><h2>Other Information</h2></legend>
                <h4>Name of Parent or Guardian</h4>
                <input type="text" placeholder="First" className="inline"></input>
                <input type="text" placeholder="Last" className="inline"></input>
                <h4>Home Address (If diffrent form yours)</h4>
                <input type="text" placeholder="Street Address"></input>
                <input type="text" placeholder="Street Address Line 2"></input>

            </fieldset>
        </div>
    )
}
export default Registerform;