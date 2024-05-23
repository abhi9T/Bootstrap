import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
    <h1>Gaming is Everything <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
      <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
    </svg></h1>
  {/* <nav className="nav nav-pills flex-column flex-sm-row">
    <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="/">Home</a>
    <a className="flex-sm-fill text-sm-center nav-link" href="/">Announcement</a>
    <a className="flex-sm-fill text-sm-center nav-link" href="/">Leaderboard</a>
    <a className="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Account</a>
  </nav> */}
    <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    </ul>


    <img src="https://pbs.twimg.com/media/GMg5uuFWMAAqVnj?format=jpg&name=large" className="responsive" alt="..."></img>



    <br></br>


    <h1>Level Up Your Life: Game On!</h1>
  <p>Imagine a universe where you can be anything, do anything. Craving epic adventures? Explore vast landscapes, conquer mythical beasts, and become a legend. Yearning for connection? Build thriving communities, forge lasting friendships, and conquer challenges together. Yearning for knowledge? Unravel historical mysteries, master complex systems, and push the boundaries of human understanding. This universe isn't some distant dream; it's the exhilarating reality of gaming.</p>
  <h2>Gaming: Your Ultimate Power-Up</h2>
  <p>It's not just fun and games; it's a portal to limitless experiences, a canvas for your creativity, and a training ground for your skills. Here's why gaming is the ultimate power-up for your life:</p>
  <ul className="list">
    <li><span>Unleash Your Inner Hero:</span>  Become a powerful warrior, a cunning strategist, or a charismatic leader. Games ignite your inner fire, letting you conquer fears, overcome challenges, and emerge victorious.
    </li>
    <li><span>Fuel Your Social Flame:</span> Gaming transcends physical limitations. Forge bonds with like-minded individuals from across the globe. Build guilds, strategize as a team, and celebrate triumphs together. Gaming fosters a sense of belonging unlike any other.</li>
    <li><span>Ignite Your Learning Spark:</span>  Games are not mindless escapes; they're interactive classrooms disguised as fun. Master complex economies, delve into historical eras through immersive simulations, or learn new languages through engaging narratives.</li>
    <li><span>Sharpen Your Mind:</span> Games keep your brain young and agile. Problem-solving, critical thinking, decision-making - these skills are all honed through the challenges and puzzles you encounter in the virtual world.</li>
    <li><span>Boost Your Confidence:</span> Mastering a difficult level, perfecting a skill, or leading your team to victory - these accomplishments build confidence that spills over into your real life. Gaming empowers you to believe in yourself and your abilities.</li>
  </ul>
  <h3>Ready to Join the Adventure?</h3>  

    <br></br>

    <div className="row mb-3">
      <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
      <div className="col-sm-10">
        <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Enter Name" />
      </div>
    </div>
    <div className="row mb-3">
      <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email" className="form-control" id="colFormLabel" placeholder="Enter E-mail" />
      </div>
    </div>
    <div className="row">
      <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Comment</label>
      <div className="col-sm-10">
        <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Write your thoughts.." />
      </div>
    </div>

    <br></br>

    <div className="row g-3">
      <div className="col-sm-7">
        <input type="text" className="form-control" placeholder="City" aria-label="City" />
      </div>
      <div className="col-sm">
        <input type="text" className="form-control" placeholder="State" aria-label="State" />
      </div>
      <div className="col-sm">
        <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" />
      </div>
    </div>
    <br></br>
    
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type="button" className="btn btn-outline-success">Success</button>
    </div>
    
    



    

    <br></br>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="/">1</a></li>
        <li className="page-item"><a className="page-link" href="/">2</a></li>
        <li className="page-item"><a className="page-link" href="/">3</a></li>
        <li className="page-item">
          <a className="page-link" href="/">Next</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default App;
