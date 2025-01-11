import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import "~/styles/app.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div className="app">
      <main className="main">
        <div className="top-section">
          <picture className="logo-container">
            <source
              srcSet="/logo-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/logo-light.png"
              alt="Remix"
              className="company-logo"
              width={200}
              height={66}
            />
          </picture>
        </div>

        <div className="center">
          <div className="welcome-section">
            <p className="welcome-text">Build better websites with modern web standards</p>
            <p className="edit-text">
              Get started by editing&nbsp;
              <code className="code">app/routes/_index.tsx</code>
            </p>
          </div>
        </div>

        <div className="grid">
          <Link to="https://remix.run/start/quickstart" className="card">
            <div className="card-content">
              <h2>
                Quick Start <span className="arrow">→</span>
              </h2>
              <p>Let&apos;s start your Remix Project instantly</p>
            </div>
          </Link>

          <Link to="https://remix.run/docs/en/main" className="card">
            <div className="card-content">
              <h2>
                Remix Docs<span className="arrow">→</span>
              </h2>
              <p>Learn about Remix and get more information</p>
            </div>
          </Link>

          <Link to="https://remix.run/docs/en/main/guides/templates" className="card">
            <div className="card-content">
              <h2>
                Templates <span className="arrow">→</span>
              </h2>
              <p>Explore starter templates for Remix</p>
            </div>
          </Link>

          <Link to="https://rmx.as/discord" className="card">
            <div className="card-content">
              <h2>
                Join Discord <span className="arrow">→</span>
              </h2>
              <p>Join the community, And get the latest info from Remix</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}