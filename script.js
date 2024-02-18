let display1 = document.querySelector(".d1")
let display2 = document.querySelector(".d2")
let display3 = document.querySelector(".d3")

let title = "gh repo view"

let index = 1;


const typeWriterAnimation = () => {
    let new_title = title.slice(0, index);
    display1.innerHTML = new_title;
    display2.innerHTML = new_title;
    index > title.length ? index = 1 : index++;
    if (index > title.length - 1) {
        display3.innerHTML = ` <p>cli/cli</p>
    <p>GitHub’s official command line tool</p>
    <div class="main-content">
        <span>GitHub CLI</span>
        <div class="first-content">
            <p><span>gh</span>is GitHub on the command line. It brings pull requests, issues,
                and
                other GitHub concepts to the terminal next to where you are already working with
                <span>git</span> and your code.
            </p>
        </div>
        <div class="second-content">
            <p>Image: screenshot of gh pr status →
                <span>https://user-images.githubusercontent.com/98482/84171218-327e7a80-aa40-11ea-8cd1-5177fc2d0e72.png</span>
            </p>
        </div>
    </div>
    <p style="color: var(--secondary-text);">View this repository on GitHub:
        https://github.com/cli/cli</p>`
    } else {
        display3.innerHTML = "";
    }

    if (index > title.length) {
        setTimeout(() => typeWriterAnimation(), 3000)

    } else {
        setTimeout(() => typeWriterAnimation(), 300)
    }
}

typeWriterAnimation();

