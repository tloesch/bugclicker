document.getElementById('trigger-shop').addEventListener('click', function()  {
  document.getElementById('city-shop').classList.add('active');
  document.getElementById('city-main').classList.remove('active');
})
document.getElementById('trigger-provider').addEventListener('click', function()  {
  document.getElementById('city-provider').classList.add('active');
  document.getElementById('city-main').classList.remove('active');
})
document.getElementById('trigger-city-1').addEventListener('click', function()  {
  document.getElementById('city-main').classList.add('active');
  document.getElementById('city-shop').classList.remove('active');
})
document.getElementById('trigger-city-2').addEventListener('click', function()  {
  document.getElementById('city-main').classList.add('active');
  document.getElementById('city-provider').classList.remove('active');
})
