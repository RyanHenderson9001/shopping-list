/* eslint-disable strict */
//dynamically geneate the html
function renderShoppingList(){
  let html='';
  for(let i=0;i<store.length;i++){
    html+= generateListItem(store[i]);
  }
  $('.shopping-list').html(html);
}
//adds an item to the shopping list
function addItem(){
  $('#js-shopping-list-form').on('submit',function (evt){
    evt.preventDefault();
    let listItem =$('#shopping-list-entry').val();
    store.push({name:listItem, completed:false});
  });
  renderShoppingList();
}

function generateListItem(item){
  
  return `<li>
  <span class="shopping-item">${item.name}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
}

let store =[
  {name:'bread',compleeted:false},
  {name:'milk',compleeted:false},
  {name:'apples',compleeted:false},
  {name:'oranges',compleeted:false},
];


function main(){
  //grabs all the remove buttons and adds listener for click
  const removeItem = document.getElementsByClassName('shopping-item-delete');
  //console.log(removeItem);
  for(let i=0;i<removeItem.length;i++){
    let button = removeItem[i];
    button.addEventListener('click',removedItem);
  }
  //helper function for the remove
  function removedItem(event){
    let buttonClicked = this;
    buttonClicked.parentElement.parentElement.remove();
  }

  //This is check toggle for jquery solution
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    //console.log('clicked');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  /*
  //grabs all the check buttons and adds listener for click
  const checkItem = document.getElementsByClassName('shopping-item-toggle');
  //console.log(checkItem);
  for(let i=0;i<checkItem.length;i++){
    let button = checkItem[i];
    button.addEventListener('click',checkedItem);
  }
  //helper function for the check
  function checkedItem(event){
    let buttonClicked = this.event;
    buttonClicked.parentElement.addClass('.shopping-item__checked');
  }
  */
  //renderShoppingList();
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    addItem();
  });
}
$(main);