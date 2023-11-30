document.addEventListener("DOMContentLoaded", function () {
    const welcomeSection = document.getElementById("welcome");
    const sectionContent = document.querySelector(".section-content");
    const imageContainer = document.querySelector(".image-container");
    const flyInTextElement = document.querySelector('.animate__fadeInLeft');

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust as needed, this represents 30% visibility
    };

    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // If the section is in view, add the text-appear class
                sectionContent.classList.add("text-appear");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(welcomeSection);

    // Add a scroll event listener for the motion effect
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Adjust the values as needed for your desired effect
        sectionContent.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
        imageContainer.style.transform = "translateY(" + scrollPosition * 0.2 + "px)";

        // Fly-in text effect
        if (isElementInViewport(welcomeSection) && !flyInTextElement.classList.contains('active')) {
            flyInTextElement.classList.add('active');
        }
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

// Add an event listener for page load
window.addEventListener("load", function () {
    const sectionContent = document.querySelector(".section-content");
    sectionContent.classList.add("text-appear");
});
