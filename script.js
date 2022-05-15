let jokes = document.getElementById('jokes');
let next = document.getElementById('btn');

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }
    catch (err) {
        console.log(`$(the error is (err)`);
    }
};

next.addEventListener('click', generateJokes);
generateJokes();
