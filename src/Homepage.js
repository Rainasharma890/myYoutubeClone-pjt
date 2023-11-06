import ytLogo from './image/ytlogo.jpeg'
import searchIcon from './image/searchicon.jpg'
import thumbnail from './image/sinchanthumb.jpg'
function Homepage(){
    return(
        <div>
            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
        {/* <h3>Home Page</h3> */}
        {/* <table border="1">
        <tr>
<th>CSS Property</th>
<th>Internet Explorer</th>
<th>Firefox</th>
<th>Chrome</th>
<th>Safari</th>
<th>Opera</th>
</tr>
<tr>
    <td><b>Border Radius</b></td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
</tr>
<tr>
    <td><b>Box Shadow</b></td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
    <td>YES</td>
</tr>
<tr>
<td><b>CSS Animations</b></td>
<td>NO</td>
<td>NO</td>
<td>YES</td>
<td>YES</td>
<td>NO</td>
</tr>
// </table> */} 
    <div class="myYoutube-header">
        <div class="header-item1">
            <div class="sub-header1"></div>
            <div class="sub-header2">
               <img id='ytlogo' src={ytLogo}/></div>
           
        </div>

        <div class="header-item2">
            {/* <div class="sub-header3"></div>  */}
           <input class="sub-header3" placeholder='Search' /> 
           <button class="search-button">
            <img class="small-image" src={searchIcon}></img>
           </button>
            <div class="sub-header4"></div>

        </div>  
        <div class="header-item3">
            <div class="sub-header5"></div>
            <button class="search-button"></button>
              {/* <img class="thumbnail" src={thumbnail}/> */}
            </div>
               
    </div>
        </div>
    )
}
export default Homepage;