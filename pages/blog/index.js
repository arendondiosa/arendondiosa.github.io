import React from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../../components/Layout/Layout';

import { getAllFilesMetadata } from '../../lib/mdx';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">
            DevBlog - A Blog Template Made For Developers
          </h2>
          <div className="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </div>
          <div className="single-form-max-width pt-3 mx-auto">
            <form className="signup-form row g-2 g-lg-2 align-items-center">
              <div className="col-12 col-md-9">
                <label className="sr-only" htmlFor="semail">
                  Your email
                </label>
                <input
                  type="email"
                  id="semail"
                  name="semail1"
                  className="form-control me-md-1 semail"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          {posts.map((post) => {
            return (
              <div key={post.slug} className="item mb-5">
                <div className="row g-3 g-xl-0">
                  <div className="col-2 col-xl-3">
                    <img
                      className="img-fluid post-thumb "
                      src="assets/images/blog/blog-post-thumb-1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="col">
                    <h3 className="title mb-1">
                      <a className="text-link" href="blog-post.html">
                        Top 3 JavaScript Frameworks
                      </a>
                    </h3>
                    <div className="meta mb-1">
                      <span className="date">Published 2 days ago</span>
                      <span className="time">5 min read</span>
                      <span className="comment">
                        <a className="text-link" href="#">
                          8 comments
                        </a>
                      </span>
                    </div>
                    <div className="intro">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies...
                    </div>
                    <a className="text-link" href="blog-post.html">
                      Read more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          <nav className="blog-nav nav nav-justified my-5">
            <a
              className="nav-link-prev nav-item nav-link d-none rounded-left"
              href="#"
            >
              Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a className="nav-link-next nav-item nav-link rounded" href="#">
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}

Blog.propTypes = {
  posts: PropTypes.array,
};

export default Blog;
