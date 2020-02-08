console.log('Clientside side');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const mOne = document.querySelector('#one');
const mTwo = document.querySelector('#Two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
    mOne.textContent = 'Loading...';
    mTwo.textContent = '';
    fetch(`/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                mOne.textContent = data.error;
            } else {
                mOne.textContent = data.forecast;
                mTwo.textContent = data.placeName;
            }
        });
    });
});
