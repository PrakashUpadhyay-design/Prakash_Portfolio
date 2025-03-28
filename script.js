

    function typeEffect() {
        const target = document.getElementById("typing-text");
        const currentWord = roles[wordIndex];

        if (isDeleting) {
            currentText = currentWord.substring(0, letterIndex--);
        } else {
            currentText = currentWord.substring(0, letterIndex++);
        }

        target.textContent = currentText;

        let speed = isDeleting ? 50 : 100; // Typing speed

        if (!isDeleting && letterIndex === currentWord.length + 1) {
            speed = 1000; // Hold before deleting
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % roles.length; // Move to next word
            speed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, speed);
    }
    

    
    const roles = ["UI Designer !", "Web Developer !", "Aspiring Business Analyst !"];
    let index = 0;
    const typingText = document.getElementById("typing-text");

    function changeText() {
        typingText.textContent = roles[index]; 
        index = (index + 1) % roles.length; 
    }

    setInterval(changeText, 2000); // Change text every 2 seconds
    changeText(); // Initial call

    