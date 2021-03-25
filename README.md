<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Justin Gorham</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
    <style>:root {
  /* Colors */
  --primaryColor: #212529;
  --secondaryColor: #95a5a6;
  --accentColor: #f1c40f;
  --linkColor: #2ecc71;
  --mutedColor: #f4f6f6;

  /* Typography */
  --ratio: 1.25;
  --scale0: 1rem;
  --scale1: calc(var(--scale0) * var(--ratio));
  --scale2: calc(var(--scale1) * var(--ratio));
  --scale3: calc(var(--scale2) * var(--ratio));
  --scale4: calc(var(--scale3) * var(--ratio));
  --scale5: calc(var(--scale4) * var(--ratio));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

body {
  color: var(--primaryColor);
  display: grid;
  font: 1em/1.5 Lato, sans-serif;
  gap: 2em;
  grid-template-columns:
    [full-start]
    1fr
    [main-start side-start]
    minmax(min-content, 12em)
    [side-end content-start]
    minmax(min-content, 36em)
    [main-end content-end]
    1fr
    [full-end];
  grid-template-rows: auto [content] 0;
  margin-bottom: 4em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

ol,
ul {
  padding-left: 1em;
}

li + li {
  margin-top: 0.2em;
}

li::marker {
  color: var(--mutedColor);
}

a {
  color: var(--linkColor);
  text-decoration: none;
  transition: color 0.2s;
}

a:focus,
a:hover {
  color: var(--accentColor);
}

h1,
h2,
h3,
h5 {
  font-weight: normal;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: var(--scale5);
}

h2 {
  color: var(--secondaryColor);
  font-size: var(--scale4);
}

h3 {
  color: var(--accentColor);
  font-size: var(--scale3);
  grid-column: side;
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--scale2);
}

h5 {
  font-size: var(--scale1);
}

h6 {
  font-size: var(--scale0);
}

blockquote {
  border-left: 0.2em solid var(--mutedColor);
  padding-left: 1em;
}

cite {
  color: var(--secondaryColor);
  font-style: inherit;
}

cite::before {
  content: '— ';
}

.masthead {
  background: var(--mutedColor);
  display: inherit;
  gap: inherit;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 4em 0;
  row-gap: 0;
}

.masthead > *,
section {
  grid-column: main;
}

article > * + *,
blockquote > * + * {
  margin-top: 0.6em;
}

.stack {
  display: grid;
  gap: 1.5em;
}

.grid-list {
  display: grid;
  gap: 1em;
}

.spaced-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spaced-list:first-child::before {
  border-bottom: 1px solid var(--mutedColor);
  content: '';
  flex-grow: 1;
  margin: 0 1em;
  order: 1;
}

.spaced-list > :nth-child(2) {
  order: 2;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.tag-list > li {
  background: var(--mutedColor);
  margin: 0 0.2em 0.2em 0;
  padding: 0.2em 0.6em;
}

@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
  }

  .masthead > *,
  section {
    grid-column: content;
  }

  section {
    display: contents;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
  </head>
  <body>
      <header class="masthead">
          <h1>Justin Gorham</h1>
          <h2>Software Engineer</h2>
      </header>
      <section id="contact">
        <h3>Contact</h3>
        <div class="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:justingorham@gmail.com">justingorham@gmail.com</a>
            </div>
            <div>
              <h4>Website</h4>
              <a href="https://justin.gorh.am">justin.gorh.am</a>
            </div>
        </div>
      </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div class="grid-list">
              <div>
                  <h4>Github</h4>
                    <a href="https://github.com/justingorham">justingorham</a>
              </div>
              <div>
                  <h4>Linkedin</h4>
                    <a href="https://www.linkedin.com/in/justingorham/">justingorham</a>
              </div>
          </div>
        </section>

      <section id="work">
        <h3>Work</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>CenterEdge Software</h4>
                  <span>
                    <time datetime="2018-10-22">Oct 2018</time> –
                    Present
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Senior Software Engineer</strong>
                    <a href="https://centeredgesoftware.com/">centeredgesoftware.com</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Itron</h4>
                  <span>
                    <time datetime="2015-05-18">May 2015</time> –
                    <time datetime="2018-10-18">Oct 2018</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Senior Software Engineer</strong>
                    <a href="https://itron.com">itron.com</a>
                </div>
              </header>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>CafePress/CircleGraphics</h4>
                  <span>
                    <time datetime="2013-09-03">Sep 2013</time> –
                    <time datetime="2015-05-08">May 2015</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>.NET Developer</strong>
                    <a href="https://www.circlegraphicsonline.com/">www.circlegraphicsonline.com</a>
                </div>
              </header>
            </article>
        </div>
      </section>
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>North Carolina State University</h4>
                  <span>
                    <time datetime="2006-08-16">Aug 2006</time> –
                    <time datetime="2010-05-14">May 2010</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Computer Science</strong>
                    <a href="https://www.ncsu.edu/">www.ncsu.edu</a>
                </div>
              </header>
                <p>Bachelor</p>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>North Carolina State University</h4>
                  <span>
                    <time datetime="2006-08-16">Aug 2006</time> –
                    <time datetime="2010-05-14">May 2010</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Applied Mathematics</strong>
                    <a href="https://www.ncsu.edu/">www.ncsu.edu</a>
                </div>
              </header>
                <p>Bachelor</p>
            </article>
            <article>
              <header>
                <div class="spaced-list">
                  <h4>North Carolina State University</h4>
                  <span>
                    <time datetime="2010-08-18">Aug 2010</time> –
                    <time datetime="2012-08-10">Aug 2012</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <a href="https://www.ncsu.edu/">www.ncsu.edu</a>
                </div>
              </header>
                <p>Master</p>
            </article>
        </div>
      </section>
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
            <div>
                <h4>Angular</h4>
            </div>
            <div>
                <h4>Typescript/Javascript</h4>
            </div>
            <div>
                <h4>.NET</h4>
            </div>
            <div>
                <h4>Containerization</h4>
            </div>
        </div>
      </section>
  </body>
</html>
