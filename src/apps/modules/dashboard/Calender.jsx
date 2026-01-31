
function Calender() {
  return (
    <div className='row bg-light '>
      <div className="col-md-6 fm p-5 bg-info-subtle">
                <p className="fs-5 fw-bold">CONTACT INFO</p>
                <p><i className="fa fa-map-marker text-danger" aria-hidden="true"></i>  <b>Address</b><br/>Noida sector-63</p>
                <p><i className="fa fa-phone text-danger" aria-hidden="true"></i>  <b>Phone</b><br/>9988776655</p>
                <p><i className="fa fa-headphones text-danger" aria-hidden="true"></i>  <b>Support</b><br/>Support@gmail.com</p>

                <p className="fs-5 fw-bold mt-5">SEND MESSAGE</p>
                <p>Your Name<br/><input type="text" className="w-100 p-2 rounded-2 border-1"/></p>
                <p>Email Address<br/><input type="text" className="w-100 p-2 rounded-2 border-1" /></p>
                <p>Subject<br/><input type="text" className="w-100 p-2 rounded-2 border-1" /></p>
                <p>Message<br/><textarea className="w-100 rounded-2 border-1" rows="7"></textarea></p>
        </div>
        <div className="col-md-6 p-5 d-flex bg-info-subtle">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.501691044436!2d77.37577607554246!3d28.629093975666674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef60526c0929%3A0xe3abc75d65b999ff!2sCodeSquadz%20-%20IT%20Training%20by%20Manish%20Bhatia%20Sir!5e1!3m2!1sen!2sin!4v1768420936639!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" w-100"></iframe>
            </div>
    </div>
  )
}

export default Calender