import { Base } from './base.js';

export class Search extends Base{
    constructor(app){
        super();
        this.app=app;
    }

    getSearch(){
        return this.app.data.map((obj)=>{
            return`
                <div class="search-item">
                    <img src="${obj.images.fixed_height_still.url}" alt="img">
                    <p class="search-rating">rating: ${obj.rating}</p>
                </div>`
        }).join(' ')
    }

    render(){
        this.setContent('searchItems', this.getSearch());
    }
}

