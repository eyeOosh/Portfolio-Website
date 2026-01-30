function openProject(button) {
    console.log("Button clicked:", button.id);
    url = "";
    switch (button.id) {
        case "project1Button":
            url = "https://www.github.com/eyeOosh/116A-Project";
            break;
        case "project2Button":
            url = "https://www.github.com/eyeOosh/British-Airways-Prediction-Model";
            break;          
        case "project3Button":
            url = "https://www.github.com/eyeOosh/Tata-Data-Visualization";
            break;
        case "project4Button":
            url = "https://www.github.com/eyeOosh/AI-Yahtzee-Bot";
            break;
        case "project5Button":
            url = "https://www.github.com/eyeOosh/BCG-Gen-AI";
            break;
        case "project6Button":
            url = "https://www.github.com/eyeOosh/Portfolio-Website";
            break;       
        default:
            url = "https://www.github.com/eyeOosh"; 
            break;   
    }

    window.open(url, '_blank').focus();
}