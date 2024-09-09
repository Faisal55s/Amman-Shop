document.getElementById("learnMoreBtn").addEventListener("click", function() {
    var moreInfoSection = document.getElementById("moreInfo");
    if (moreInfoSection.style.display === "none") {
        moreInfoSection.style.display = "block";
    } else {
        moreInfoSection.style.display = "none";
    }
});
