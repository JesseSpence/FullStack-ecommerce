<template>
    <footer class="footer-section">
                <div class="row">
                    
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>4427 Avenue, Cape City, Central</span>
                            </div>
                        </div>
                    </div>
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+123 456 7890</span>
                            </div>
                        </div>
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>email123@gmailcom</span>
                            </div>
                        </div>
           
            <div class="footer-content">
                <div class="row">
                        <div class="footer-widget">
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <span class="followus">Follow us:</span>
                                <div class="footer-social-icon">
                                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                                <a href="https://www.twitter.com" target="_blank">Twitter</a>
                                <a href="https://www.instagram.com" target="_blank">Instagram</a>
                                <a href="https://github.com" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>We can get in Touch</h3>
                            </div>
                            <div class="footer-text">
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
        <div class="copyright-area">
                <div class="row">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved</p>
                        </div>
                    </div>
                        <div class="footer-menu">
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/Login">Login</router-link></li>
                                <li><router-link to="/signUp">Sign up</router-link></li>
                            </ul>
                        </div>
                    </div>
    </footer>
</template>
<!-- <script>
export default {
    
}
</script>-->
<style scoped>
    /*Footer*/
ul {
    margin: 0px;
    padding: 0px;
}


.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: rgba(246, 203, 94, 0.755);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.followus{
     color: rgba(246, 203, 94, 0.755);
    font-size: 1.5rem;
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
  color: rgba(246, 203, 94, 0.755);
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: dead;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #797373 !important;
  font-size: 16px;
  margin-right: 15px;
}
div.footer-social-icon{
  display:flex;
  margin-top: 2%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

}
.footer-social-icon a:hover {
  color: rgba(246, 203, 94, 0.755);
  font-size: 16px;
  margin-right: 15px;
}
.footer-widget-heading h3 {
  color: rgba(246, 203, 94, 0.755);
  font-size: 20px;
  font-weight: 600;
  margin:40px 0 40px 0;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  bottom:0;
  height: 2px;
  border-radius: 10px;
  width: 225px;
  background: silver;
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
  background: #2e2e2e4e;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    color:silver;
    background: rgb(10, 10, 10);
    padding: 13px 20px;
    border: 1px solid rgba(246, 203, 94, 0.755);
    top: 0;
}
.copyright-area{
  background-color: var(--background-color);
  padding: 25px 0;
  margin-top: 30px;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}

.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: rgba(246, 203, 94, 0.755);
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style> 