<template>
    <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>4427 Avenue, Cape City, Central</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+123 456 7890</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>email123@gmailcom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us:</span>
                                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                                <a href="https://www.twitter.com" target="_blank">Twitter</a>
                                <a href="https://www.instagram.com" target="_blank">Instagram</a>
                                <a href="https://github.com" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Get in Touch</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>For more information about our products, provide your email and we'll get back to you </p>
                            </div>
                            <div class="subscribe-form">
                                <form>
                                    <input type="text" placeholder="Email Address">
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/Login">Login</router-link></li>
                                <li><router-link to="/signUp">Sign up</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<!-- <script>
export default {
    
}
</script>
<style scoped>
    /*Footer*/
ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 75% 27%, rgb(12, 74, 110) 0, transparent 18%), radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
      color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: dead;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: white;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon a:hover {
  color: blue;
  font-size: 16px;
  margin-right: 15px;
}
.footer-widget-heading h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: blue;
}
.footer-widget ul li {
  display: inline-block;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: blue;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: blue;
    padding: 13px 20px;
    border: 1px solid blue;
    top: 0;
}
.copyright-area{
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(at 75% 27%, rgb(12, 74, 110) 0, transparent 18%), radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
  padding: 25px 0;
  margin-top: 300px;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: blue;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: blue;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style> -->