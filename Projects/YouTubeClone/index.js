const API_KEY = ''

const videosList = document.getElementById('videos-list')

const searchVideos = async () => {
  try {
    const query = document.getElementById('search-input').value
    console.log(query)
    const API_URL = `https://youtube.googleapis.com/youtube/v3/search?maxResults=15&type=video&q=${query}&key=${API_KEY}`

    const res = await fetch(API_URL)
    const data = await res.json()

    videosList.innerHTML = ''
    displayVideos(data.items)
  } catch (error) {
    console.log('Error fetching videos', error)
  }
}

const displayVideos = (videos) => {
  videos.forEach(video => {
    const col = document.createElement('div')
    col.classList.add('col-lg-4', 'col-md-12', 'p-1')

    const iframe = document.createElement('iframe')
    iframe.height = '280'
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    iframe.title = 'YouTube video player'
    iframe.frameborder = '0'
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.referrerpolicy ='strict-origin-when-cross-origin'
    iframe.setAttribute('allowfullscreen', 'true')

    col.append(iframe)
    videosList.append(col)
  })
}

const badges = [...document.getElementsByClassName('badge')]
badges.forEach(badge => {
  badge.addEventListener('click', (event) => {
    document.getElementById('search-input').value = event.target.innerText

    badges.forEach(b => b.classList.remove('text-bg-light'))
    event.target.classList.remove('text-bg-dark')
    event.target.classList.add('text-bg-light')

    searchVideos()
  })
})