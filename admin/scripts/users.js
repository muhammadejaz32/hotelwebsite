function get_users()
{
  let xhr = new XMLHttpRequest();
xhr.open("POST","ajax/users.php",true);
xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');


xhr.onload = function(){

  document.getElementById('users-data').innerHTML = this.responseText;
      
  }

xhr.send('get_users');

}



function toggle_status(id,val)
{
  let xhr = new XMLHttpRequest();
xhr.open("POST","ajax/users.php",true);
xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');


xhr.onload = function(){

if(this.responseText==1)
{
  alert('success','Status toggled!');
  get_users();
}


else{
  alert('success','Server Down!');

}
      
  }

xhr.send('toggle_status='+id+'&value='+val);

}



    function remove_user(user_id)
    {
      if(confirm("are you sure, you want te remove this user?"))
      {
        let data = new FormData();
        data.append('user_id',user_id);
        data.append('remove_user', '');

        let xhr = new XMLHttpRequest();
        xhr.open("POST","ajax/users.php",true);

        xhr.onload = function(){

        if(this.responseText == 1){
          alert('success','user removed!');
          get_users();
        }
        else{
          alert('error','user removal failed!');
    }
   }
        xhr.send(data);
      }

    }

    


window.onload = function()
{
  get_users();
}




