const feeControl = document.querySelector(".fee");
const feeDropdown = document.querySelector(".dropdown");
const dashBoardLink = document.querySelector('.dashboard_link');
const dashBoardPage = document.querySelector('.dashboard__page');
const lectureTable = document.querySelector('.lecture_timetable');
const resources = document.querySelector('.resources');
const deptInfo = document.querySelector('.dept_info');
const timetableLink = document.querySelector('.timetable_link');
const resourcesLink = document.querySelector('.resources_link');
const deptLink = document.querySelector('.dept_link');
const navBar = document.querySelector('.navbar');
const menuOpen = document.querySelector('.menu_open')

menuOpen.addEventListener('click', (e) => {
  navBar.classList.toggle('hidden')
})
const dropDownControl = (input) => {
    input.style.display === "block"
      ? (input.style.display = "none")
      : (input.style.display = "block");
  };

  feeControl.addEventListener("click", () => {
    dropDownControl(feeDropdown);
  });

  dashBoardLink.addEventListener('click', (e) => {
    e.preventDefault()
    dashBoardPage.classList.remove('hidden')
    lectureTable.classList.add('hidden')
    resources.classList.add('hidden')
    deptInfo.classList.add('hidden')
  })
  timetableLink.addEventListener('click', (e) => {
    e.preventDefault()
    lectureTable.classList.remove('hidden')
    dashBoardPage.classList.add('hidden')
    resources.classList.add('hidden')
    deptInfo.classList.add('hidden')
  })

  resourcesLink.addEventListener('click', (e) => {
    e.preventDefault()
    lectureTable.classList.add('hidden')
    dashBoardPage.classList.add('hidden')
    resources.classList.remove('hidden')
    deptInfo.classList.add('hidden')
  })

  deptLink.addEventListener('click', (e) => {
    e.preventDefault()
    lectureTable.classList.add('hidden')
    dashBoardPage.classList.add('hidden')
    resources.classList.add('hidden')
    deptInfo.classList.remove('hidden')

    if (window.innerWidth < 765) {
      navBar.classList.toggle('hidden')
    }
  })