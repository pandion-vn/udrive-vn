import { formatDate } from '@/common/utils';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';
import SideBar from '../widgets/sidebar';

interface HomeBlogListingProps extends WithChildren {
  posts: Post[];
}

const HomeBlogListing = ({ posts }: HomeBlogListingProps) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <div className="row">
              {posts.map((post, index) => (
                <div key={index} className="col-lg-6 mb-4 pb-2">
                  <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                    <div className="card-img">
                      {post.feature_image ? (
                        <img
                          src={post.feature_image}
                          alt={post.feature_image_alt ?? `Image_${post.id}`}
                          className="img-fluid"
                        />
                      ) : (
                        <img
                          src="/images/blog/img01.jpg"
                          alt="Post Images"
                          className="img-fluid"
                        />
                      )}
                      <div className="card-overlay"></div>

                      <div className="position-absolute top-0 start-0 mt-3 ms-4">
                        <p className="badge bg-dark">Car</p>
                      </div>
                    </div>
                    <div className="content px-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="h5 title d-block mb-0 text-white title-dark"
                      >
                        {post.title}
                      </Link>

                      <div className="d-flex author align-items-center mt-2">
                        <FiUser color='white' size={30}/>
                        <div className="ms-2">
                          <small className="text-white-50 user d-block">
                            The Udriver
                          </small>
                          <small className="text-white-50 date">
                            {' '}
                            {formatDate(post.published_at)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div className="col-12">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="mdi mdi-chevron-left mdi-18px"></i>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  {/* <li className="page-item"><a className="page-link active" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="mdi mdi-chevron-right mdi-18px"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <SideBar />
        </div>
      </div>
      =
    </section>
  );
};

export default HomeBlogListing;
