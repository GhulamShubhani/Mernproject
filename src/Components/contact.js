import React from 'react'
import "../App.css";

const Contact =()=>{
  return (
    <>
		<div className="contact_info">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12  d-flex justify-content-between">
						<div className="contact_info_item d-flex  justify-content-around align-items-center">
							<i class="fas fa-mobile-alt"/>
							<div className="contact_info_content">
								<div className="contact_info_tittle">
									phone
								</div>
								<div className="contact_info_text ">
									+917899876574
								</div>
							</div>
						</div>
						<div className="contact_info_item d-flex  justify-content-around align-items-center">
							<i class="fas fa-mobile-alt"/>
							<div className="contact_info_content">
								<div className="contact_info_tittle">
									email
								</div>
								<div className="contact_info_text ">
									abc@gmail.com
								</div>
							</div>
						</div>
						<div className="contact_info_item d-flex  justify-content-around align-items-center">
							<i class="fas fa-mobile-alt"/>
							<div className="contact_info_content">
								<div className="contact_info_tittle">
									Adress
								</div>
								<div className="contact_info_text ">
									banglore
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div className="contact_form">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact_form_container mt-10">
							<div className="contact_form_tittle">
								get in touch
							</div>
							<form id="contact_form">
								<div className="contact_form_name d-flex justify-content-between align-items-center">
									<input type="text" id="contect_name" placeholder="your name" />
									<input type="email" id="contect_email" placeholder="your email" />
									<input type="number" id="contect_number" placeholder="your number" />
								</div>
								<div className="contact_form_message">
									<textarea className="text_feild" id="" cols="60" rows="7"></textarea>
								</div>
								<div className="contact_form_button">
									<button type="submit" className="button contact_submit_button">send message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Contact