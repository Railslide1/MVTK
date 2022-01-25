var password = "test"

function passcheck(){
  if (document.getElementById('pass').value != password){
    alert('Go away, you arent authorized.');
    return false;
  }

  if (document.getElementById('pass').value != password){
    alert('Continue!');
    return true;
  }
}
