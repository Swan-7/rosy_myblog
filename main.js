// nav background
const header = document.querySelector("header");

function toggleTab(event, tabName) {
  const filterTabs = document.querySelectorAll(".filter-item");
  const postBoxes = document.querySelectorAll(".post-box");
  if (tabName == "all") {
    for (let index = 0; index < postBoxes.length; index++) {
      postBoxes[index].style.display = "block";
    }
  } else {
    for (let index = 0; index < postBoxes.length; index++) {
      if (postBoxes[index].classList.contains(tabName)) {
        postBoxes[index].style.display = "block";
      } else {
        postBoxes[index].style.display = "none";
      }
    }
  }

// goes through each filter tabs and sets them as active if 
// tabName is equal to the data-filter attribute value
// others it removes the active filter from the class of the element
// if it exists on it;
  for (let index = 0; index < filterTabs.length; index++) {
    if (filterTabs[index].getAttribute("data-filter") == tabName) {
      filterTabs[index].classList.add("active-filter");
    } else {
      filterTabs[index].classList.remove("active-filter");
    }
  }
}

// Filter
document.addEventListener("DOMContentLoaded", function () {
  // const filterItems = document.querySelectorAll(".filter-item");
  // const postBoxes = document.querySelectorAll(".post-box");

  // filterItems.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     // Get the value of the "data-filter" attribute of the clicked element
  //     let value = this.getAttribute("data-filter");

  //     if (value === "all") {
  //       showAllPostBoxes();
  //     } else {
  //       hideNonMatchingPostBoxes(value);
  //       showMatchingPostBoxes(value);
  //     }

  //     // this refers to the filter item clicked
  //     this.classList.add("active-filter");
  //     let siblings = Array.from(this.parentNode.children).filter(function (el) {
  //       return el !== this;
  //     }, this);
  //     siblings.forEach(function (sibling) {
  //       sibling.classList.remove("active-filter");
  //     });
  //     // reference the parent of this clicked element and get all its children
  //     // turn then into an array using array.from
  //     // filter through that array for any element that isnt this currently clicked element
  //     // 'this' is added as a second parameter on the filter method because its referenced in its callback function
  //     // Remove the "active-filter" class from the siblings of the clicked element
  //   });
  // });

  // function showAllPostBoxes() {
  //   // Show all post boxes by setting their display style to "block"
  //   postBoxes.forEach(function (box) {
  //     box.style.opacity = "1";
  //     box.style.display = "block";
  //     box.style.animation = "fadeIn 1s";
  //   });
  // }

  // function hideNonMatchingPostBoxes(value) {
  //   // Hide post boxes that don't have the matching value as a class
  //   postBoxes.forEach(function (box) {
  //     if (!box.classList.contains(value)) {
  //       box.style.opacity = "0";
  //       box.style.display = "none";
  //       box.style.animation = "fadeOut 1s";
  //     }
  //   });
  // }

  // function showMatchingPostBoxes(value) {
  //   // Show post boxes that have the matching value as a class
  //   postBoxes.forEach(function (box) {
  //     if (box.classList.contains(value)) {
  //       box.style.opacity = "1";
  //       box.style.display = "block";
  //       box.style.animation = "fadeIn 1s";
  //     } else {
  //       box.style.opacity = "0";
  //       box.style.display = "none";
  //       box.style.animation = "fadeOut 1s";
  //     }
  //   });
  // }

  async function getRandomImages() {
    const URL = "https://dog.ceo/api/breeds/image/random";
    const imageTags = document.getElementsByClassName("post-img");
    const imageTagPromises = [];

    for (let index = 0; index < imageTags.length; index++) {
      imageTagPromises.push(fetch(URL).then((response) => response.json()));
    }

    const imageResponses = await Promise.all(imageTagPromises);

    for (let index = 0; index < imageTags.length; index++) {
      imageTags[index].src = imageResponses[index].message;
    }
  }

  getRandomImages();
});

// function get_random_image() {

//   url = "https://dog.ceo/api/breeds/image/random";

//   let imageUrl = "";

//   imageUrl = fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       return data.message;
//     })
//     .catch(function (error) {
//       console.log("Error: " + error);
//     });
//   return imageUrl;
// }

// const printImage = (item) => {
//   get_random_image().then((imageUrl) => {
//     item.src = imageUrl
//   });
// };

// function display_image() {
//   const imageTag = document.getElementsByClassName("post-img");

//   for (item of imageTag) {
//     printImage(item);
//   }
// }

// display_image();
