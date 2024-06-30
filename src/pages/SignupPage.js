import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles/bootstrap.min.css";
import "../pages/styles/style.css";

const SignupPage = ({ }) => {
   
      
  return (
    <div className="">
    
     
      <section class="ftco-section">
        <div class="container">
         
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="wrap d-md-flex">
                <div class="img bgimg"></div>

                <div class="login-wrap p-4 p-md-5">
                  <div class="">
                    <div class="w-100">
                      <h3 class="mb-2">Create account</h3>
                    </div>
                    <div className="text-sm  text-current ">
                      For Teachers or Students.
                    </div>
                    
                  </div>
                  <form action="#" class="signin-form">
                    <div class="flex">
                      <div class="form-group mb-3">
                        <label class="" for="name">
                          First name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Bill"
                          required
                        />
                      </div>
                     
                      <div class="form-group mb-3">
                        <label class="" for="password">
                          Last name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Sander"
                          required
                        />
                      </div>
                      </div>
                      <div class='flex'>
                      <div class="form-group mb-3">
                        <label class="" for="name">
                          Email or phone number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="bill.sanders@example.com"
                          required
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="" for="password">
                          Date of birth
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder=""
                          required
                        />
                      </div>
                      </div>
                      <div class='flex '>
                      <div class="form-group mb-3">
                        <label class="" for="Password">
                          Password
                        </label>
                        <input
                          type="text"
                          class="form-control"

                          required
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="" for="Confirm password">
                        Confirm password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                        
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group ">
                      <div class="custom-control custom-checkbox mb-3">
                      <div class='d-flex justify-between '>
                        <input type="checkbox" class="custom-control-input" id="rememberMe" />
                        <label class="custom-control-label" for="rememberMe">Remember me</label>
                        <div class="form-group d-md">
                      <div class="w-90  text-md-right">
                        <a href="#" class="text-cyan-800">
                          Forgot Password
                        </a>
                      </div>
                    </div>
                    </div>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="agreeTerms" />
                        <label class="custom-control-label" for="agreeTerms">I agree to all the Terms and Privacy Policy</label>
                      </div>
                      </div>
                    
                    <div class=''>
                    <div class="form-group d-flex justify-content-between ">
                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit mx-4 px-3"
                      >
                        Create account
                      </button>
                    <div>
                   <div className="form-group">
                      <button type="button" className="form-control btn btn-outline-primary rounded submit px-3 d-flex align-items-center justify-content-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google icon" className="mr-2" style={{ width: '20px' }} />
                        Sign-in with Google
                      </button>
                      </div>
                  </div>
                    </div>
                    </div>
                  </form>
                  <p class="text-center font- normal text-black">
                    Don't have an account?
                    <Link to="./login">
                      <a data-toggle="tab" class="text-cyan-700 " href="#signup">
                        Login in
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
