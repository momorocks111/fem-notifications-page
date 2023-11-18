const notificationNum = document.querySelector(".notifications-num");
const markBtn = document.getElementById("read-btn");
const unRead = document.querySelectorAll(".unread");
var /**{Number}*/ count = unRead.length;
notificationNum.innerHTML = `${count}`;

unRead.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.remove("unread");
    count--;
    notificationNum.innerHTML = `${count}`;
  });
});

markBtn.addEventListener("click", () => {
  unRead.forEach((e) => {
    e.classList.remove("unread");
  });
  count = 0;
  notificationNum.innerHTML = `${count}`;
});
