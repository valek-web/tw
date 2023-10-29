class Slider {
  constructor(images, container) {
    this.images = images
    this.currentIndex = 0
    this.slideContainer = container
    this.prevButton = document.querySelector('.prev-button')
    this.nextButton = document.querySelector('.next-button')

    this.prevButton.addEventListener('click', this.prevSlide.bind(this))
    this.nextButton.addEventListener('click', this.nextSlide.bind(this))
  }

  createSliderItems() {
    let currentHtml = ''
    this.images.forEach((item, index) => {
      if (index == 0) {
        currentHtml += `<img src="${item}" class="slider-img slider-img__active" alt="Slide">`
        return
      }
      currentHtml += `<img src="${item}" class="slider-img" alt="Slide">`
    })
    this.slideContainer.innerHTML = currentHtml
  }

  showSlide() {
    const sliderItems = this.slideContainer.querySelectorAll('.slider-img')
    console.log(sliderItems)
    sliderItems.forEach((sliderItem, i) => {
        console.log(this.currentIndex)
      if (i === this.currentIndex) {
        console.log("if " + this.currentIndex)
        sliderItem.classList.add('slider-img__active')
      } else {
        console.log("else " + this.currentIndex)
        sliderItem.classList.remove('slider-img__active')
      }
    })
  }

  prevSlide() {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1
    }
    this.showSlide()
  }

  nextSlide() {
    this.currentIndex++
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0
    }
    this.showSlide()
  }
}

/************************************************************************************/

const images = [
  'http://zornet.ru/_fr/81/3394004.jpg',
  'http://zornet.ru/_fr/81/9661273.jpg',
  'http://zornet.ru/_fr/81/1010328.jpg',
]
const container = document.querySelector('.slider-container')

const slider = new Slider(images, container)

slider.createSliderItems()

setInterval(() => slider.nextSlide(), 5000)
