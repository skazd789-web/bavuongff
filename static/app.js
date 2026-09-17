const toast = document.getElementById('toast');
const videoInput = document.getElementById('videoInput');
const uploadButton = document.getElementById('uploadButton');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3000);
}

uploadButton.addEventListener('click', () => videoInput.click());
videoInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) showToast(`Đã chọn “${file.name}” — sẵn sàng để tải lên ✦`);
});

document.querySelectorAll('.card-play').forEach((button) => {
  button.addEventListener('click', () => showToast('Trình phát video sẽ sớm được cập nhật ✦'));
});

document.querySelector('.icon-button').addEventListener('click', () => {
  const query = window.prompt('Bạn muốn tìm video nào?');
  if (query) showToast(`Đang tìm kiếm: ${query}`);
});
