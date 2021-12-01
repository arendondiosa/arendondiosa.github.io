import React from 'react';
import PropTypes from 'prop-types';
import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import Layout from '../../components/Layout/Layout';

const Post = ({ source, frontmatter }) => {
  return (
    <Layout>
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          <header className="blog-post-header">
            <h2 className="title mb-2">
              Why Every Developer Should Have A Blog
            </h2>
            <div className="meta mb-3">
              <span className="date">Published 2 days ago</span>
              <span className="time">5 min read</span>
              <span className="comment">
                <a className="text-link" href="#">
                  4 comments
                </a>
              </span>
            </div>
          </header>

          <div className="blog-post-body">
            <figure className="blog-banner">
              <a href="https://made4dev.com">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-post-banner.jpg"
                  alt="image"
                />
              </a>
              <figcaption className="mt-2 text-center image-caption">
                Image Credit:{' '}
                <a
                  className="theme-link"
                  href="https://made4dev.com?ref=devblog"
                  target="_blank"
                  rel="noreferrer"
                >
                  made4dev.com (Premium Programming T-shirts)
                </a>
              </figcaption>
            </figure>

            <MDXRemote {...source} />

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.{' '}
            </p>

            <h3 className="mt-5 mb-3">Code Block Example</h3>
            <p>
              You can get more info at{' '}
              <a
                className="text-link"
                href="https://highlightjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://highlightjs.org/
              </a>
              . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.{' '}
            </p>
            <pre>
              <code></code>
            </pre>
            <h3 className="mt-5 mb-3">Typography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h5 className="my-3">Bullet Points:</h5>
            <ul className="mb-5">
              <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li className="mb-2">Aenean commodo ligula eget dolor.</li>
              <li className="mb-2">
                Aenean massa cum sociis natoque penatibus.
              </li>
            </ul>
            <ol className="mb-5">
              <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li className="mb-2">Aenean commodo ligula eget dolor.</li>
              <li className="mb-2">
                Aenean massa cum sociis natoque penatibus.
              </li>
            </ol>
            <h5 className="my-3">Quote Example:</h5>
            <blockquote className="blockquote m-lg-5 py-3   ps-4 px-lg-5">
              <p className="mb-2">
                You might not think that programmers are artists, but
                programming is an extremely creative profession. Its logic-based
                creativity.
              </p>
              <footer className="blockquote-footer mt-0">John Romero</footer>
            </blockquote>

            <h5 className="my-3">Table Example:</h5>
            <table className="table table-striped my-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <h5 className="mb-3">Embed A Tweet:</h5>

            <blockquote className="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                1969:
                <br />
                -what&#39;re you doing with that 2KB of RAM?
                <br />
                -sending people to the moon
                <br />
                <br />
                2017:
                <br />
                -what&#39;re you doing with that 1.5GB of RAM?
                <br />
                -running Slack
              </p>
              &mdash; I Am Devloper (@iamdevloper){' '}
              <a href="https://twitter.com/iamdevloper/status/926458505355235328?ref_src=twsrc%5Etfw">
                November 3, 2017
              </a>
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>

            <h3 className="mt-5 mb-3">Video Example</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.{' '}
            </p>

            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1nxSE0R27Gg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <nav className="blog-nav nav nav-justified my-5">
            <a
              className="nav-link-prev nav-item nav-link rounded-left"
              href="#"
            >
              Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a
              className="nav-link-next nav-item nav-link rounded-right"
              href="#"
            >
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav>

          <div className="blog-comments-section">
            <div id="disqus_thread"></div>
          </div>
        </div>
      </article>

      <section className="promo-section theme-bg-light py-5 text-center">
        <div className="container">
          <h2 className="title">Promo Section Heading</h2>
          <p>
            You can use this section to promote your side projects etc. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.{' '}
          </p>
          <figure className="promo-figure">
            <a href="https://made4dev.com" target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src="assets/images/promo-banner.jpg"
                alt="image"
              />
            </a>
          </figure>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

Post.propTypes = {
  source: PropTypes.object,
  frontmatter: PropTypes.object,
};

export default Post;
