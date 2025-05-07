
function resetContentVisibility() {
    if (window.innerWidth >= 1000) {
      // 画面が大きい場合、すべてのコンテンツを表示
      document.querySelectorAll('.left-content, .main-content, .right-content').forEach(content => {
        content.classList.remove('hidden');
        content.style.display = 'block';
      });
    } else {
      // 画面が小さい場合、main-contentのみを表示
      document.querySelectorAll('.left-content, .right-content').forEach(content => {
        content.classList.add('hidden');
        content.style.display = 'none';
      });
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.classList.remove('hidden');
        mainContent.style.display = 'block';
      }
    }
  }

  // ボタンを押したときの処理
  document.querySelectorAll('.button-text').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); // デフォルトのリンク動作を無効化

      // 全てのコンテンツを非表示にする
      document.querySelectorAll('.left-content, .main-content, .right-content').forEach(content => {
        content.classList.add('hidden');
        content.style.display = 'none';
      });

      // 対象のコンテンツを表示する
      const target = button.getAttribute('data-target');
      const targetElement = document.querySelector(`.${target}`);
      if (targetElement) {
        targetElement.classList.remove('hidden');
        targetElement.style.display = 'block';
      }
    });
  });

  // 画面サイズ変更時の処理
  window.addEventListener('resize', resetContentVisibility);

  // 初期状態のリセット
  resetContentVisibility();

  // JavaScriptでメニュー開閉を制御
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  function updateDateTime() {
    const now = new Date();
    document.getElementById("calendar").textContent =
      now.getFullYear() + "/" +
      String(now.getMonth() + 1).padStart(2, "0") + "/" +
      String(now.getDate()).padStart(2, "0");

    document.getElementById("clock").textContent =
      now.toLocaleTimeString();
  }

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360 + 270;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 5 + 270;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 270;

    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock();

  setInterval(updateDateTime, 1000);
  updateDateTime();