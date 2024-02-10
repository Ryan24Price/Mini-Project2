import React from 'react';
// If you have a Dashboard.js or similar, import it here
// import Dashboard from './Dashboard'; // Uncomment if applicable

function AnimeList() {
  return (
    <>
      <div className="carousel">
        <button className="carousel__button carousel__button--left is-hidden">
          <img src="images/left.svg" alt="left" />
        </button>

        <div className="carousel__track-container">
          <ul className="carousel__track">
            <li className="carousel__slide current-slide">
              <img
                className="carousel__image d-block w-100"
                src="../assets/images/yuyu hakusho.jpe"
                alt="yuyu"
              />
            </li>
            <li className="carousel__slide">
              <img
                className="carousel__image d-block w-100"
                src="../assets/images/demon slayer.jpg"
                alt="demon"
              />
            </li>
            <li className="carousel__slide">
              <img
                className="carousel__image d-block w-100"
                src="../assets/images/jujutsu kaisen.jpg"
                alt="juju"
              />
            </li>
          </ul>
        </div>

        <button className="carousel__button carousel__button--right">
          <img src="images/right.svg" alt="right" />
        </button>

        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/attack on titan.jpg"
              alt="Attack on Titan"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Attack on Titan</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/chainsaw man.jpe"
              alt="Chainsaw Man"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Chainsaw Man</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/demon slayer.jpg"
              alt="Demon Slayer"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Demon Slayer</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/hunter hunter.jpg"
              alt="Hunter x Hunter"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Hunter x Hunter</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/my hero academia.jpg"
              alt="My Hero Academia"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">My Hero Academia</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/tokyo ghoul.jpg"
              alt="Tokyo Ghoul"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Tokyo Ghoul</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/death note.jpg"
              alt="Death Note"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Death Note</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/jujutsu kaisen.jpg"
              alt="Jujutsu Kaisen"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Jujutsu Kaisen</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/dragon ball z.jpg"
              alt="Dragon Ball Z"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Dragon Ball Z</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/mob.jpg"
              alt="Mob Psycho 100"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Mob Psycho 100</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/bleach.jpg"
              alt="Bleach"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Bleach</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="../assets/images/ghost in the shell.jpg"
              alt="Ghost in the Shell"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Ghost in the Shell</h5>
              <p className="card-text">Enter to view the Newest Releases.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeList;

