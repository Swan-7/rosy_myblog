// nav background
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
}) 

// Filter
document.addEventListener("DOMContentLoaded", function () {
    let filterItems = document.querySelectorAll(".filter-item");
    let postBoxes = document.querySelectorAll(".post-box");
  
    filterItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Get the value of the "data-filter" attribute of the clicked element
        let value = this.getAttribute("data-filter");
  
        if (value === "all") {
          showAllPostBoxes();
        } else {
          hideNonMatchingPostBoxes(value);
          showMatchingPostBoxes(value);
        }
        
        // this refers to the filter item clicked
        this.classList.add("active-filter");
        let siblings = Array.from(this.parentNode.children).filter(function (el) {
          return el !== this;
        }, this);
        siblings.forEach(function (sibling) {
          sibling.classList.remove("active-filter");
        });
        // reference the parent of this clicked element and get all its children
        // turn then into an array using array.from
        // filter through that array for any element that isnt this currently clicked element
        // 'this' is added as a second parameter on the filter method because its referenced in its callback function
        // Remove the "active-filter" class from the siblings of the clicked element
      });
    });
  
    function showAllPostBoxes() {
      // Show all post boxes by setting their display style to "block"
      postBoxes.forEach(function (box) {
        box.style.opacity = "1";
        box.style.display = "block";
        box.style.animation = "fadeIn 1s";
      });
    }
  
    function hideNonMatchingPostBoxes(value) {
      // Hide post boxes that don't have the matching value as a class
      postBoxes.forEach(function (box) {
        if (!box.classList.contains(value)) {
            box.style.opacity = "0";
            box.style.display = "none";
            box.style.animation = "fadeOut 1s";
          }
      });
    }
  
    function showMatchingPostBoxes(value) {
      // Show post boxes that have the matching value as a class
      postBoxes.forEach(function (box) {
        if (box.classList.contains(value)) {
            box.style.opacity = "1";
            box.style.display = "block";
            box.style.animation = "fadeIn 1s";
          } else {
            box.style.opacity = "0";
            box.style.display = "none";
            box.style.animation = "fadeOut 1s";
          }
      });
    }
  });
  