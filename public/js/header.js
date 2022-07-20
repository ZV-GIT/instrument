function OpenPopup() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("open");
  return;
}

function OpenPopupFinish() {
  const popup = document.getElementById("popup-finish");
  popup.classList.toggle("open");
  return;
}

function OpenSearch() {
  document.getElementById('logoimg').style.display = 'none';
  document.getElementById('mobile-right-menu').style.display = 'none';
  document.getElementById('burger-menu').style.display = 'none';
  document.getElementById('search').style.display = 'flex';
  document.getElementById('search').style.margin = '0';
  document.getElementById('CloseSearch').style.display = 'block';
  return;
}

function CloseSearch() {
  document.getElementById('logoimg').style.display = 'block';
  document.getElementById('mobile-right-menu').style.display = 'block';
  document.getElementById('burger-menu').style.display = 'block';
  document.getElementById('search').style.display = 'none';
  document.getElementById('search').style.marginleft = '20px';
  document.getElementById('CloseSearch').style.display = 'none';
  return;
}
