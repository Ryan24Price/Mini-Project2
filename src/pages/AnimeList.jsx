import React from 'react'

var perf =require('./App.html');

function ProfilePage() {
  return (
    <> 
    <div class="carousel">
        <button class="carousel__button carousel__button--left is hidden">
            <img> src="images/left.svg" alt="left"</img> 
        </button>

        <div class="carousel__track-container">
            <ul class="carousel__track">
                <li class="carousel__slide current-slide">
                    <img class="carousel__image" src="../assets/images/yuyu hakusho.jpe" class="d-block w-100" alt="yuyu" style="width:650px;height:320px;"></img> 
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="../assets/images/demon slayer.jpg" class="d-block w-100" alt="demon" style="width:650px;height:320px;" ></img> 
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="../assets/images/jujutsu kaisen.jpg" class="d-block w-100" alt="juju" style="width:650px;height:320px;"></img> 
                </li>
            </ul>
        </div>

        <button class="carousel__button carousel__button--right">
            <img src="images/right.svg" alt="right"></img> 
        </button>

        <div class="carousel__nav">
            <button class="carousel__indicator current-slide"></button>
            <button class="carousel__indicator"></button>
            <button class="carousel__indicator"></button>
        </div>
    </div>
    <script src="Dashboard.js"></script>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
    <div class="row row-cols-1, row-cols-2, row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/attack on titan.jpg" alt="attack" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Attack on Titan</h5>
              <p class="card-text">
                Enter to view the Newest Releases.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/chainsaw  man.jpe.jpe" alt="chainsaw" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Chainsaw Man</h5>
              <p class="card-text">
                Enter to view the Newest Releases.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/demon slayer.jpg" alt="demon" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Demon Slayer</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/hunter hunter.jpg" alt="hunt" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Hunter Hunter</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/my hero academia.jpg" alt="hero" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">My Hero Academia</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/tokyo ghoul.jpg" alt="ghoul" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Toyko Ghoul</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/death note.jpg" alt="note" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Death Note</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/jujutsu kaisen.jpg" alt="juju" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">JuJutsu Kaisen</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/dragon ball z.jpg" alt="Dragon" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Dragon Ball Z</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/mob.jpg" alt="mob" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Mob Psycho 100</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/bleach.jpg" alt="Bleach" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Bleach</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
            src="../assets/images/ghost in the shell.jpg" alt="shell" style="width:455px;height:455px;"
              class="card-img-top"
              alt="placeholder"
            />
            <div class="card-body">
              <h5 class="card-title">Ghost in the Shell</h5>
              <p class="card-text">
                Enter to view the Newest Releases..
              </p>
            </div>
    
</div>
</div>
      
    </>
  )
}

export default AnimeList;

