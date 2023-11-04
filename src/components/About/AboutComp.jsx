import { IconCV, IconGitHub, IconLinkedIn } from "../Icons";
import "./AboutComp.scss";

const AboutComp = () => {
  return (
    <div className="about_wrapper">
      <h2>About page</h2>
      <ul className="about_list">
        <li>
          <h3>Links</h3>
          <div className="links_wrapper">
            <p>
              <a href="https://github.com/YazikovXIII/react_redux_new_todos" target="_blank" rel="noopener noreferrer">
                <IconGitHub /> Client
              </a>
            </p>
            <p>
              <a href="https://github.com/YazikovXIII/my-playground-server" target="_blank" rel="noopener noreferrer">
                <IconGitHub /> Server
              </a>
            </p>
            <p>
              <a href="https://github.com/YazikovXIII" target="_blank" rel="noopener noreferrer">
                <IconGitHub /> My GitHub
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/vlad-yazikov-0575b727b/" target="_blank" rel="noopener noreferrer">
                <IconLinkedIn /> My LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/1hiulMyP_VFs3C97g4acplCB7HybEzfuR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCV /> My CV
              </a>
            </p>
          </div>
        </li>
        <li>
          <h3>
            <code>&lt;Home/&gt;</code>
          </h3>
          <p>
            In this section, I had a bit of fun experimenting with conditional rendering, useSelector, and props. Here&apos;s the deal:
            if you&apos;re not logged in, you&apos;ll pretty much see...well, nothing, except a couple of lines in the Hero section.
            You&apos;ll also spot only &quot;sign in&quot; and &quot;sign up&quot; in the Header. But wait! Once you&apos;re logged in,
            &quot;sign in&quot; and &quot;sign up&quot; magically transform into navlinks leading you to different parts of the
            application. Plus, I&apos;ve woven in some restricted and private routes magic, ensuring you don&apos;t stumble upon
            authorization stuff when you&apos;re already logged in, and conversely, you won&apos;t catch a glimpse of anything but the
            authorization features if you&apos;re logged out. Cool, right?
          </p>
        </li>
        <li>
          <h3>
            <code>&lt;Header/&gt;</code>
          </h3>
          <p>
            Oh, and I totally forgot to tell you about some nifty tricks I pulled off with the Logo in the Header. When you&apos;re
            just a wanderer (not logged in), those logos are mere gateways back to the homepage. But — plot twist! — once you&apos;re
            logged in, the right logo transforms into this super cool button that waves goodbye (logs you out) when you click it. And,
            there&apos;s more! I&apos;m pretty sure I&apos;m going to flip the script on that button soon, probably morphing it into a
            snazzy burger button that&apos;ll pop open a modal window teeming with navigation goodness and user-centric features.
            Actually...I might&apos;ve already pulled that off.
          </p>
        </li>
        <li>
          <h3>
            <code>&lt;Todos/&gt;</code>
          </h3>
          <p>
            Oh boy, the Todos page! That was the star of the show from the get-go. I was on a mission to get chummy with React-Redux
            (we weren&apos;t exactly besties during my studies), so I conjured up some todos using redux. But here&apos;s the catch —
            every time you hit that refresh button, poof! Your todos vanish into thin air. What a bummer, right? Now, I&apos;m
            pondering... should I enlist the help of Redux persist to safeguard our precious todos in the fortress of localstorage?
            That sounds like a plan. OR... I could play architect and build a server using MongoDB as a database. Then, I&apos;d have a
            cozy little digital nook to tuck away my todos and fetch them on command whenever you drop by the Todos page. Fancy, huh?
          </p>
          <p>
            Off course the idea of this page is to add my todo and render a list of todos, to set them completed or delete some... But
            what&apos;s the point of rendering everybody&apos;s todos into a single list? So, I set it up in such a way that every user
            can see only his/her todos. Unfortunately, you won&apos;t be able to peek at my todos... or will you? Maybe I should
            hardcode an administrator feature someday, so you can actually see everybody&apos;s todos and even have the power to delete
            someone&apos;s todo.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutComp;
