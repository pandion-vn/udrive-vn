const HomeHero = () => {
  return (
    <section
      className="bg-half-170 d-table w-100"
      style={{ background: "url('images/bg/blog02.jpg') center" }}
    >
      <div className="bg-overlay bg-gradient-overlay"></div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-12">
            <div className="title-heading text-center">
              <h5 className="heading fw-semibold page-heading text-white title-dark">
                Blog & News
              </h5>
              <p className="text-white-50 para-desc mx-auto mb-0">
                Our Latest Blog and News in Image Masonry Layouts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
