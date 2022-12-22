function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    }

    return str;
}
let storyText = document.getElementById("story");
let story1Text = document.getElementById("story1");
let story2Text = document.getElementById("story2");
let story3Text = document.getElementById("story3");
storyText.textContent = truncate(storyText.textContent, 16);
story1Text.textContent = truncate(story1Text.textContent, 16);
story2Text.textContent = truncate(story2Text.textContent, 16);
story3Text.textContent = truncate(story3Text.textContent, 16);