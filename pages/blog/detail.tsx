import Layout from '@/components/layout';

const BlogDetail = () => {
  return (
    <Layout>
      <section className="bg-half-170">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="title-heading">
                <ul className="list-inline">
                  <li className="list-inline-item me-3">
                    <i className="uil uil-user h5 mb-0"></i>
                    <a href="#" className="text-primary h6">
                      {' '}
                      Mr. Donald Ruffy
                    </a>
                  </li>
                  <li className="list-inline-item text-muted h6 me-3">
                    <i className="uil uil-calender h5 text-dark"></i> 15th April
                    2021
                  </li>
                  <li className="list-inline-item text-muted h6">
                    <i className="uil uil-clock h5 text-dark"></i> 8 min read
                  </li>
                </ul>

                <h5 className="heading fw-semibold page-heading">
                  Capsule Wardrobe Essentials The Leopard Print Coat
                </h5>

                <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                  <ul className="breadcrumb p-0 mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Starty</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="blog-grid.html">BLog</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Single Post
                    </li>
                  </ul>
                </nav>
              </div>

              <div id="grid" className="row mt-4">
                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["branding"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/01.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["designing"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/02.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["photography"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/03.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["development"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/04.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["branding"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/05.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/05.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4 col-12 spacing picture-item"
                  data-groups='["designing"]'
                >
                  <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                    <div className="card-img position-relative">
                      <img
                        src="/images/portfolio/06.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>

                      <div className="pop-icon">
                        <a
                          href="/images/portfolio/06.jpg"
                          className="btn btn-pills btn-icon lightbox"
                        >
                          <i className="uil uil-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-muted">
                  <span className="dropcaps display-4 text-dark me-2">T</span>he
                  most well-known dummy text is the 'Lorem Ipsum', which is said
                  to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin. It contains a series of real
                  Latin words. This ancient dummy text is also incomprehensible,
                  but it imitates the rhythm of most European languages in Latin
                  script. The advantage of its Latin origin and the relative
                  meaninglessness of Lorum Ipsum is that the text does not
                  attract attention to itself or distract the viewer's attention
                  from the layout.
                </p>
                <p className="text-muted mb-0">
                  Thus, Lorem Ipsum has only limited suitability as a visual
                  filler for German texts. If the fill text is intended to
                  illustrate the characteristics of different typefaces, it
                  sometimes makes sense to select texts containing the various
                  letters and symbols specific to the output language.
                </p>

                <blockquote className="text-center mx-auto blockquote">
                  <i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i>{' '}
                  The man who comes back through the door in the wall will never
                  be quite the same as the man who went out.{' '}
                  <small className="d-block text-muted mt-2">
                    - Starty Template
                  </small>
                </blockquote>

                <p className="text-muted">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                  These alternatives to the classic Lorem Ipsum texts are often
                  amusing and tell short, funny or nonsensical stories.
                </p>
              </div>

              <div className="card shadow rounded border-0 mt-5">
                <div className="card-body">
                  <h5 className="card-title mb-0">Comments :</h5>

                  <ul className="media-list list-unstyled mt-4 mb-0">
                    <li className="pt-3">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/01.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark media-heading"
                              >
                                Lorenzo Peterson
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th April 2021 at 01:25 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/02.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="media-heading text-dark"
                              >
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th April 2021 at 05:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/03.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="media-heading text-dark"
                              >
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              16th April 2021 at 03:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>

                      <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                        <li className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <a className="pe-3" href="#">
                                <img
                                  src="/images/client/01.jpg"
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="img"
                                />
                              </a>
                              <div className="commentor-detail">
                                <h6 className="mb-0">
                                  <a
                                    href="#"
                                    className="text-dark media-heading"
                                  >
                                    Lorenzo Peterson
                                  </a>
                                </h6>
                                <small className="text-muted">
                                  17th April 2021 at 01:25 pm
                                </small>
                              </div>
                            </div>
                            <a href="#" className="text-muted">
                              <i className="mdi mdi-reply"></i> Reply
                            </a>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour "
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow rounded border-0 mt-5">
                <div className="card-body">
                  <h5 className="card-title mb-0">Leave A Comment :</h5>

                  <form className="mt-4">
                    <div className="row pt-3">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Comment</label>
                          <textarea
                            id="message"
                            placeholder="Your Comment"
                            rows={5}
                            name="message"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="send d-grid">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="sidebar sticky-bar ms-lg-4">
                <div className="widget text-center">
                  <div className="rounded p-4 shadow bg-white">
                    <img
                      src="/images/client/03.jpg"
                      className="avatar avatar-medium rounded-circle shadow-lg"
                      alt=""
                    />

                    <div className="mt-4">
                      <a href="blog-author.html" className="text-dark title h5">
                        Christina Gonzalez
                      </a>
                      <p className="text-muted">Blogger</p>

                      <ul className="list-unstyled align-items-center social-icon social mb-0">
                        <li className="list-inline-item">
                          <a href="#" className="rounded">
                            <i className="uil uil-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="rounded mt-1">
                            <i className="uil uil-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="rounded mt-1">
                            <i className="uil uil-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="rounded mt-1">
                            <i className="uil uil-linkedin"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="rounded mt-1">
                            <i className="uil uil-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget mt-4 pt-2">
                  <div className="rounded p-4 shadow bg-white">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">
                      Recent Post
                    </h6>
                    <div className="mt-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="/images/blog/01.jpg"
                          className="avatar avatar-small rounded"
                          style={{ width: 'auto' }}
                          alt=""
                        />
                        <div className="flex-1 ms-3">
                          <a
                            href="#"
                            className="d-block title text-dark"
                          >
                            Consultant Business
                          </a>
                          <span className="text-muted">15th April 2021</span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mt-3">
                        <img
                          src="/images/blog/02.jpg"
                          className="avatar avatar-small rounded"
                          style={{ width: 'auto' }}
                          alt=""
                        />
                        <div className="flex-1 ms-3">
                          <a
                            href="#"
                            className="d-block title text-dark"
                          >
                            Grow Your Business
                          </a>
                          <span className="text-muted">15th April 2021</span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mt-3">
                        <img
                          src="/images/blog/03.jpg"
                          className="avatar avatar-small rounded"
                          style={{ width: 'auto' }}
                          alt=""
                        />
                        <div className="flex-1 ms-3">
                          <a
                            href="#"
                            className="d-block title text-dark"
                          >
                            Look On The Glorious Balance
                          </a>
                          <span className="text-muted">15th April 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget mt-4 pt-2 text-center">
                  <div className="rounded p-4 shadow bg-white">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded">
                      Tags Cloud
                    </h6>
                    <div className="tagcloud mt-4">
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Business
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Marketing
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Fashion
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Bride
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Lifestyle
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Travel
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Beauty
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Video
                      </a>
                      <a
                        href="#"
                        className="rounded text-dark"
                      >
                        Audio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title fw-semibold mb-3">Related News</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Our design projects are fresh and simple and will benefit your
                  business greatly. Learn more about our work!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="tiny-three-item">
                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/01.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Corporate
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        Building Your Corporate Identity from Starty
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/02.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Branding
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        The Dark Side of Overnight Success
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/03.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Technology
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        The Right Hand of Business IT World
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/04.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Personal
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        How to Create Your Own Viral Moments
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/05.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Business
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        How to Write a Business Plan For Any Business
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tiny-slide">
                  <div className="card blog blog-primary shadow rounded overflow-hidden m-2">
                    <div className="image position-relative overflow-hidden">
                      <img
                        src="/images/blog/06.jpg"
                        className="img-fluid"
                        alt=""
                      />

                      <div className="blog-tag">
                        <a href="#" className="badge bg-light">
                          Marketing
                        </a>
                      </div>
                    </div>

                    <div className="card-body content">
                      <a
                        href="blog-detail-four.html"
                        className="h5 title text-dark d-block mb-0"
                      >
                        Seeing the Customer Journey More Clearly
                      </a>
                      <p className="text-muted mt-2 mb-2">
                        The most well-known dummy text is the 'Lorem Ipsum', in
                        the 16th century.
                      </p>
                      <a
                        href="blog-detail-four.html"
                        className="link text-dark"
                      >
                        Read More{' '}
                        <i className="uil uil-arrow-right align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
