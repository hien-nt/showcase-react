import { FaPen } from "react-icons/fa";
export default function Description () {
    return(
        <>
        <div class="body-02">
        <div class="body-title-02">Description</div>
        <div class="body-icon-02"><a href="#popup02"><FaPen/></a></div>
        <div id="popup02" class="overlay">
          <div class="popup">
            <a class="close" href="#">&times;</a>
            <p>Description</p>
    
            <img src=".\assets\images\image.png"/>
    
            <div class="content-w">
              
                <div class="frame">
                <ul class="popup02-content">
                  <li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.</li>
                  <li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
                  <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
                </ul>
              </div>
              
            </div>
    
            
            <div class="db-btn">
              <a>Cancel</a>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>

      <ul class="list-01">
        <li>
          Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem
          integer tincidunt ante vel nasand praesent blandit lacinia erat
          vestibulum sed.
        </li>
        <li>
          Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere.
        </li>
        <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
      </ul>
      </>

    )
}