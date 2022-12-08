const Footer = () => {
  return (
    <footer className="footer bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <a href="#" className="logo-footer">
                    <img src="/images/udrive-logo.svg" height="26" alt="" />
                  </a>
                  <p className="mt-4">
                    Start working with Starty that can provide everything you.
                  </p>
                  <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                    <li className="list-inline-item">
                      <a
                        href="https://1.envato.market/starty"
                        target="_blank"
                        className="rounded"
                      >
                        <i
                          className="uil uil-shopping-cart align-middle"
                          title="Buy Now"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-8 col-12">
                  <div className="row">
                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <h6 className="footer-head">Company</h6>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="page-aboutus.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> About
                            us
                          </a>
                        </li>
                        <li>
                          <a
                            href="page-services-two.html"
                            className="text-foot"
                          >
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="page-team.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> Team
                          </a>
                        </li>
                        <li>
                          <a href="page-pricing.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="portfolio-detail-four.html"
                            className="text-foot"
                          >
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Project
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <h6 className="footer-head">Usefull Links</h6>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="index.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> Terms
                            of Services
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="page-contact.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Changelog
                          </a>
                        </li>
                        <li>
                          <a href="page-elements.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Components
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <h6 className="footer-head">Resources</h6>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <a href="page-faqs.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> Theme
                            guide
                          </a>
                        </li>
                        <li>
                          <a href="page-faqs.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Support desk
                          </a>
                        </li>
                        <li>
                          <a href="page-services.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i> What
                            we offer
                          </a>
                        </li>
                        <li>
                          <a href="page-aboutus.html" className="text-foot">
                            <i className="uil uil-angle-right-b me-1"></i>{' '}
                            Company history
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-py-30 footer-bar bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p className="mb-0 text-muted">
                  © Udrive. Design with{' '}
                  <i className="mdi mdi-heart text-danger"></i> by{' '}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Pandion.vn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
