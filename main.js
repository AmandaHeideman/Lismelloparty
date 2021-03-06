filter.onchange = function () {
  let recipes = document.getElementsByClassName("recipe");
  let selectedFilter = document.getElementById("filter").value;

  for (i = 0; i < recipes.length; i++) {
    allergy = recipes[i].getElementsByTagName("span");
    txtValue = allergy[0].innerHTML;
    let txtValue2;
    if (allergy[1]) {
      txtValue2 = allergy[1].innerHTML;
    } else {
      txtValue2 = allergy[0].innerHTML;
    }
    if (selectedFilter === "ShowAll") {
      recipes[i].style.display = "";
    } else if (txtValue.indexOf(selectedFilter) > -1) {
      recipes[i].style.display = "";
    } else if (txtValue2.indexOf(selectedFilter) > -1) {
      recipes[i].style.display = "";
    } else {
      recipes[i].style.display = "none";
    }
  }
};
