import './style.css'
import getLikes from './modules/involvementAPI';

const gameId = 'T0GqmEuAfMsAPA8BNA8s'; // game name: 'Dilsher'
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const likesURL = `${involvementAPI}/${gameId}/likes`

const myLikes = getLikes(likesURL);
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let apidata = '';
    data.map((value) => {
      apidata += `
      <tr class="d-flex justify-content-between">
        <td class="img"><img src="${value.image}"></td>
        <td>
          <div>
            <span>Category: </span>
            <span>${value.category}</span>
          </div>
          <div>
            <span>Price: </span>
            <span>${value.price} PKR</span>
          </div>
        </td>
        <td>
          <button type="submit" class="btn">Add to cart</button>
          <button type="submit" class="btn">Like(${value.id}) 
            <i class="fa fa-heart"></i>          
          </button>
        </td>
      </tr>
      `
    })
    document.getElementById('display').innerHTML = apidata;
  })