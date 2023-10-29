let page = 1
let totalPage = 0
let users = []

const btnLoadMore = document.querySelector('.btn')

const getUsers = async (page = 1) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`)

  if (response.ok) {
    let json = await response.json()
    totalPage = json.total_pages
    users = [...users, ...json.data].sort((a, b) => {
      let nameA = a.first_name.toUpperCase()
      let nameB = b.first_name.toUpperCase()

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })
    setHtmlUsers()
  } else {
    alert('Ошибка!')
  }
}

getUsers(page)

const setHtmlUsers = () => {
  const container = document.querySelector('.users__wrapper')

  let innerContainer = ''

  users.forEach((i) => {
    innerContainer += `<div class="user" data-id="${i.id}">
    <div class="user__wrapper">
        <div class="user__img">
            <img src="${i.avatar}" alt="avatar">
        </div>
        <div class="user__info">
            <div class="user__fullname">${i.first_name} ${i.last_name}</div>
            <div class="user__email">${i.email}</div>
        </div>
    </div>
    </div>`
  })

  if (page == totalPage) {
    btnLoadMore.classList.add('btn--disactive')
  }

  container.innerHTML = innerContainer
}

btnLoadMore.addEventListener('click', () => {
  if (page < totalPage) {
    page += 1
    getUsers(page)
  }
})
