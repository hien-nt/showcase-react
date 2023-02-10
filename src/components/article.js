import "./style.css";
import { FaPen } from "react-icons/fa";
export default function Article() {
    return(
        <>
        <div class="body">
        <div class="body-title">Gembucket</div>
        <div class="body-icon"><a href="#popup1"><FaPen/></a></div>

        <div id="popup1" class="overlay">
          <div class="popup">
            <a class="close" href="#">&times;</a>
            <p>Project</p>
    
            <p>Name</p>
            <input type="text" id="fname" name="fname" value="Gembucket" /><br />
    
            <p>Keyword</p>
            <input type="text" id="fname" name="fname" /><br />
           
    
            <p>Summary</p>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
    Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.</textarea
            >
            <br />
    
            <p>Website</p>
            <input
              type="text"
              id="fname"
              name="fname"
              value="https://gembucket.com"
            />
            <select name="cars" id="cars">
              <option value="volvo">Official Sites</option>
            </select>
            <span>Remove</span>
            <br />
            <span>Add another website</span><br />
            <div class="db-btn">
              <a>Cancel</a>
              <button>Save</button>
            </div>
          </div>
        </div>

      </div>
      <p class="body-tag">
        #solar_breeze #solar_breeze #solar_breeze #solar_breeze
      </p>
      <p class="bd-content">
        Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet
        at neque aenean auctor gravida sem praesent id massa id nisl venenatis
        lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis
        lectus suspendisse.
      </p>
      <p class="bd-link">Official site: <a href="#00">https://gembucket.com</a></p>
      <img
        class="main-img"
        src="https://www.samsung.com/global/galaxy/apps/common/img/oneui_sns.jpg"
        alt=""
      />
      </>
    )
}