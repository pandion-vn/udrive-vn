import { getAllPosts, getPostBySlug } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import Layout from '@/components/layout';
import SideBar from '@/components/widgets/sidebar';
import { Meta } from '@/types/seo';
import { formatDate, formatHtmlContent } from '@/common/utils';

interface BlogDetailProps extends WithChildren {
  post: Post;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const meta = {
    title: post.title ?? 'Any thing by car',
    description: post.excerpt ?? 'Car, vehicle',
    keywords: post.primary_tag,
  } as Meta;

  return (
    <Layout meta={meta}>
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
                      The Udriver
                    </a>
                  </li>
                  <li className="list-inline-item text-muted h6 me-3">
                    <i className="uil uil-calender h5 text-dark"></i>{' '}
                    {formatDate(post.published_at)}
                  </li>
                  {/* <li className="list-inline-item text-muted h6">
                    <i className="uil uil-clock h5 text-dark"></i> 8 min read
                  </li> */}
                </ul>

                <h5 className="heading fw-semibold page-heading">
                  {post.title}
                </h5>

                {/* <nav aria-label="breadcrumb" className="d-inline-block mt-4">
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
                </nav> */}
              </div>

              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: formatHtmlContent(post.html),
                }}
              />

              {/* <div className="card shadow rounded border-0 mt-5">
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
                              <a href="#" className="text-dark media-heading">
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
                              <a href="#" className="media-heading text-dark">
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
                              <a href="#" className="media-heading text-dark">
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
              </div> */}

              {/* <div className="card shadow rounded border-0 mt-5">
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
              </div> */}
            </div>

            <SideBar />
          </div>
        </div>

        {/* <div className="container mt-100 mt-60">
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
        </div> */}
      </section>
    </Layout>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const posts = (await getAllPosts({})) as PostsOrPages;
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
}
