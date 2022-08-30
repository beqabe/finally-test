import { topics } from './common/common.js';
import { trending } from './common/common.js';
import { Trend } from './modules/trend.js';
// import { searchGif } from './common/common.js';
import { Search } from './modules/searchBTN.js';





// search gif

let btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', ()=>{

    let searchValue = document.getElementById('userSearch').value;

    let query = [];
    query.push(searchValue);
    topics.push(query[0]);

    if (topics.length >= 5 && searchValue.length > 1){
        topics.shift();
    }
    
    let btnShow = (value) =>{
        let btnLists = [];
        for (let i of value){
            btnLists.push(`<input type="button" id="button1" value="${i}"></input>`);
        }
        return btnLists.join(' ');
    }

    document.getElementById('buttons').innerHTML = btnShow(topics);

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query[0]}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
        return res=res.json()
    }).then((res)=>{
        let search = new Search(res);

        let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
    })
    
})


// search trending

fetch(trending).then((res)=>{
    return res=res.json()
}).then((res)=>{
    let trend = new Trend(res);

    let btnTrend = document.getElementById('buttonTrend');
    let trendShow = document.getElementById('trendItems');
    let searchShow = document.getElementById('searchItems');

    btnTrend.addEventListener('click', ()=>{
        searchShow.classList.add('search-items')
        trendShow.classList.remove('trend-items')
        trendShow.classList.add('dsp-block');
        trend.render();
    })
});
 


let btn1 = document.getElementById('button1');

btn1.addEventListener('click', ()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${btn1.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let search = new Search(res);

            let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
        })
})

//

let btn2 = document.getElementById('button2');

btn2.addEventListener('click', ()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${btn2.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let search = new Search(res);

            let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
        })
})

//

let btn3 = document.getElementById('button3');

btn3.addEventListener('click', ()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${btn3.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let search = new Search(res);

            let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
        })
})

//

let btn4 = document.getElementById('button4');

btn4.addEventListener('click', ()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${btn4.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let search = new Search(res);

            let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
        })
})

//

let btn5 = document.getElementById('button5');

btn5.addEventListener('click', ()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${btn5.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
        .then((res)=>{
            return res=res.json()
        }).then((res)=>{
            let search = new Search(res);

            let btnSubmit = document.getElementById('submit');
        let searchShow = document.getElementById('searchItems');
        let trendShow = document.getElementById('trendItems');
        let searchContent = document.getElementById('userSearch');

        trendShow.classList.add('trend-items')
        searchShow.classList.remove('search-items')
        searchShow.classList.add('dsp-block');

        search.render();
        })
})