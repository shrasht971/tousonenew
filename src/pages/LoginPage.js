import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/bootstrap.min.css"
import "./styles/style.css"

const LoginPage = () => {
    //style="background-image: url(images/bg-1.jpg);"
  return (
    <div className="">
      <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="img bgimg" >
			      </div>
                  
						<div class="login-wrap p-4 p-md-5">
			      	<div class="">
			      		<div class="w-100">
                          <p class="text-end mt-{-30%}">Already have an account? <a data-toggle="tab" className='btn btn-primary' href="/signup">Register</a></p>
			      			<h3 class="mb-2">Hello ! Welcome back</h3>
			      		</div>
                        <div className='text-sm  text-current '>Log in with your data that you entered during Your registration</div>
								
			      	</div>
							<form action="#" class="signin-form">
			      		<div class="form-group mb-3">
			      			<label class="" for="name">Email address</label>
			      			<input type="text" class="form-control" placeholder="Username" required />
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="" for="password">Password</label>
		              <input type="password" class="form-control" placeholder="Password" required />
		            </div><div class="form-group d-md">
		            	
                        <div class="w-90  text-md-right">
                            <a href="#" ><p class='text-cyan'>Forgot Password</p></a>
                        </div>
        </div>
		            <div class="form-group">
		            	<button type="submit" class="form-control btn btn-primary rounded submit text-sm px-3">Start Now!</button>
		            </div>
					<p class='text-xl m-2 text-center'>OR</p>
					<div className="form-group">
                      <button type="button" className="form-control btn btn-outline-primary rounded submit px-3 d-flex align-items-center justify-content-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google icon" className="mr-2" style={{ width: '20px' }} />
                        Sign in with Google
                      </button>
                    </div>
		          </form>
		          <p class="text-center text-black">Don't have an account?<Link to="/signup" ><a data-toggle="tab" class="text-cyan-700" href="#signup">Sign Up</a></Link></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
};

export default LoginPage;