import { FaPen } from "react-icons/fa";
export default function Features() {
  return (
    <>
      <div class="body-02">
        <div class="body-title-02">Features</div>
        <div class="body-icon-02">
          <a href="#popup03">
            <FaPen />
          </a>
        </div>

        <div id="popup03" class="overlay">
          <div class="popup">
            <a class="close" href="#">
              &times;
            </a>
            <p>Features</p>

            <img src=".\assets\images\img1.png" />

            <div class="content-w">
              <p>Title</p>
              <input
                type="text"
                id="fname"
                name="fname"
                value="Getting stakeholder"
              />
              <br />
              <p>Description</p>
              <textarea id="w3review" name="w3review" rows="4" cols="50">
                Ipsum ac tellus semper interdum mauris libero ullamcorper purus
                sit amet nulla quisque arcu libero rustrum sempereed ac lobortis
                vel dapibus at.
              </textarea>
            </div>

            <img src=".\assets\images\img2.png"/>

            <div class="content-w">
              <p>Title</p>
              <input
                type="text"
                id="fname"
                name="fname"
                value="User interaction"
              />
              <br />
              <p>Description</p>
              <textarea id="w3review" name="w3review" rows="4" cols="50">
                Sollicitudin vitae consectetuer eget rutrum at lorem integer
                tincidunt anteca veal ipsum praesent blandit lacinia erat
                vestibulum sed at magna.
              </textarea>
            </div>
            <br />

            <span>Add another website</span>
            <br />
            <div class="db-btn">
              <a>Cancel</a>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>

      <div class="body-03">
        <img
          class="bd-03-img"
          src="https://media.istockphoto.com/id/1400848449/photo/one-happy-young-mixed-race-call-centre-telemarketing-agent-talking-on-a-headset-while-working.jpg?b=1&s=170667a&w=0&k=20&c=7QEP-RrnJ9HnOdqn6rAV2pDckZoV0liP7TRRqdeGxVo="
          alt=""
        />
        <div class="bd-03-content">
          <div class="bd-03-content-title">User research</div>
          <p class="bd-03-content-main">
            Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus
            aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam
            orci pede.
          </p>
        </div>
      </div>

      <div class="body-03">
        <div class="bd-03-content">
          <div class="bd-03-content-title">Getting stakeholder</div>
          <p class="bd-03-content-main">
            Sollicitudin vitae consectetuer eget rutrum at lorem integer
            tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum
            sed at magna.
          </p>
        </div>
        <img
          class="bd-03-img"
          src="https://media.istockphoto.com/id/1400848449/photo/one-happy-young-mixed-race-call-centre-telemarketing-agent-talking-on-a-headset-while-working.jpg?b=1&s=170667a&w=0&k=20&c=7QEP-RrnJ9HnOdqn6rAV2pDckZoV0liP7TRRqdeGxVo="
          alt=""
        />
      </div>

      <div class="body-03">
        <img
          class="bd-03-img"
          src="https://media.istockphoto.com/id/1400848449/photo/one-happy-young-mixed-race-call-centre-telemarketing-agent-talking-on-a-headset-while-working.jpg?b=1&s=170667a&w=0&k=20&c=7QEP-RrnJ9HnOdqn6rAV2pDckZoV0liP7TRRqdeGxVo="
          alt=""
        />
        <div class="bd-03-content">
          <div class="bd-03-content-title">User interaction</div>
          <p class="bd-03-content-main">
            Sollicitudin vitae consectetuer eget rutrum at lorem integer
            tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum
            sed at magna.
          </p>
        </div>
      </div>
    </>
  );
}
