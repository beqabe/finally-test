import { Base } from './base.js';

export class Trend extends Base{
    constructor(app){
        super();
        this.app=app;
    }

    getTrend(){
        return this.app.data.map((obj)=>{
            return`
                <div class="trend-item">
                    <img src="${obj.images.fixed_height_still.url}" alt="img">
                    <p class="trend-rating">rating: ${obj.rating}</p>
                </div>`
        }).join(' ')
    }

    render(){
        this.setContent('trendItems', this.getTrend());
    }
}

