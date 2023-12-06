class Timer{
    constructor(){
        this.timer = 5
    }

    set setTimer(this){
        this.timer = this.timer - 1
    }

    get getTimer(){
        return this.timer
    }

    startCountdown(){
        if(this.timer === 0){
            clearInterval(countdown);
        }

        let countdown = setInterval(() => {
            while(this.timer > 0){
                setTimer();
            }
        }, 1000)
    }
}


export default class Order extends Timer{
    constructor(order, orderContainer, timelineContainer){
        this.order = order
        this.orderContainer = orderContainer
        this.timelineContainer = timelineContainer
        this.state.prep = false
        this.state.complete = false
        this.state.close = false
        this.state.cancel = false
    };

    set setCancel(state){
        this.state.cancel = state
    }

    set setPrep(state){
        this.state.prep = state
    }

    set setComplete(state){
        this.state.complete = state
    }

    set setClose(state){
        this.state.close = state
    }

    renderHead(){
        let head = '';
        head += `
        <section class="card-head ${this.order.orderCode}">
            <section class="order-info">
                <article class="order-info-head">
                    <p class="name">${this.order.name}</p>
                    <p class="order-number">Order # ${this.order.number}</p>
                </article>
                <article class="order-info-body">
                    <p class="time">${this.order.time}</p>
                    <p class="order-timer">00:00:01</p>
                </article>
            </section>
        </section>
        <section class="card-cat ${this.order.orderCode}">
            <p>${this.order.type}</p>
        </section>
        `;

        return head;
    };

    renderCancel(){
        let cancel = '';
        cancel += `
        <section class="order-close-overlay" data-target=".card-${this.order.number}">
            <div>Order Canceled</div>
        </section>
        <section class="closing-overlay" id="closing-${this.order.number}">
        `
        return cancel;
    };

    renderInstruction(){
        let instruction = '';
        instruction += `
        <section class="req-container">
            <h3>special instructions</h3>
            <p>
                ${orderData.order[i].instruction}
            </p>
        </section>
        `
        return instruction;
    };

    renderItem(){
        let allItemByCategory = '';

        // loop through all category
        this.order.category.map( cat => {
            let singleItem = '';
            let singleCategory = '';
            
            // loop through all item by category
            for(let i = 0; i < cat.order.length; i++){
                // if request is empty
                if(cat.order[i].req === null){
                    singleItem += `
                    <section class="order" id="order-${this.order.number}-${cat.id}-${i}">
                        <section class="product-container">
                            <p class="product-qty">${cat.order[i].qty}</p>
                            <section class="product">
                                <p class="product-name">${cat.order[i].name}</p>
                            </section>
                        </section>
                        <section class="checkmark">
                            <svg width="15" height="13" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.736018L2.82857 7L0 4.12901L0.725143 3.39299L2.82857 5.52274L8.27486 0L9 0.736018Z" fill="#006666"/>
                                </svg>                                            
                            <input type="radio" name="" id="" data-target="#order-${this.order.number}-${cat.id}-${i}" class="order-check">                                         
                        </section>
                    </section>
                    `;
                }else{
                    let singleReq = '';
                    // loop through all request
                    cat.order[i].req.map( req => {
                        singleReq += `
                        <p class="special">${req}</p>
                        `
                    });
                    singleItem += `
                    <section class="order" id="order-${this.order.number}-${cat.id}-${i}">
                        <section class="product-container">
                            <p class="product-qty">${cat.order[i].qty}</p>
                            <section class="product">
                                <p class="product-name">${cat.order[i].name}</p>
                                ${singleReq}
                            </section>
                        </section>
                        <section class="checkmark">
                            <svg width="15" height="13" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.736018L2.82857 7L0 4.12901L0.725143 3.39299L2.82857 5.52274L8.27486 0L9 0.736018Z" fill="#006666"/>
                                </svg>                                            
                            <input type="radio" name="" id="" data-target="#order-${this.order.number}-${cat.id}-${i}" class="order-check">                                         
                        </section>
                    </section>
                    `;
                };
            };

            // add all item to single category container
            singleCategory += `
            <section class="order-cat">
                <p>category ${cat.id} :</p>
            </section>
            `

            // add category to the all order container
            allItemByCategory += `
                ${singleCategory}
                ${singleItem}
            `
        });

        return allItemByCategory;
    };

    renderBtn(){
        let prepBtn = '';
        let completeBtn = '';

        prepBtn += `
        <section class="card-prep-btn" id="prep-${this.order.number}">
            <button class="prep-btn" onclick="${this.setPrep()}" data-target="#order-${this.order.number}" data-prep="#prep-${this.order.number}">Start Preparing</button>
        </section>
        `

        completeBtn += `
        <section class="card-prep-btn order-complete">
            <button class="complete-btn"" onclick="${this.setComplete()}">Order Complete</button>
        </section>
        `
        if(this.state.prep === false && this.state.complete === false){
            return prepBtn;
        } else if (this.state.prep === true && this.state.complete === true){
            return completeBtn;
        } return;
    };

    renderClosing(){
        let closing = '';
        closing += `
        <section class="closing-container">
            <section class="countdown-container">
                    <svg class="timer-path" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="53.5" cy="53.5" r="53" stroke="black" stroke-opacity="0.5"/>
                    </svg>     
                    <svg class="timer-indicator" width="107" height="101" viewBox="0 0 107 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_16_760" fill="white">
                        <path d="M107 53.5C107 44.0668 104.506 34.8012 99.7703 26.6427C95.0347 18.4843 88.2262 11.7229 80.035 7.04419C71.8438 2.36547 62.5612 -0.0642701 53.1282 0.00129216C43.6951 0.0668544 34.4472 2.62539 26.3218 7.41752C18.1964 12.2096 11.4826 19.065 6.86089 27.2885C2.23922 35.512 -0.125953 44.8113 0.00516856 54.2436C0.13629 63.676 2.75904 72.906 7.60752 80.9978C12.456 89.0897 19.3578 95.7557 27.6133 100.32L28.4862 98.7413C20.5092 94.3308 13.8401 87.8895 9.15511 80.0705C4.47013 72.2515 1.93582 63.3328 1.80912 54.2186C1.68242 45.1043 3.96783 36.1186 8.43366 28.1724C12.8995 20.2262 19.3869 13.602 27.2383 8.97151C35.0897 4.34099 44.0258 1.86873 53.1407 1.80538C62.2556 1.74202 71.2253 4.08983 79.1402 8.61078C87.0552 13.1317 93.6341 19.6651 98.2099 27.5484C102.786 35.4318 105.196 44.3849 105.196 53.5H107Z"/>
                        </mask>
                        <path d="M107 53.5C107 44.0668 104.506 34.8012 99.7703 26.6427C95.0347 18.4843 88.2262 11.7229 80.035 7.04419C71.8438 2.36547 62.5612 -0.0642701 53.1282 0.00129216C43.6951 0.0668544 34.4472 2.62539 26.3218 7.41752C18.1964 12.2096 11.4826 19.065 6.86089 27.2885C2.23922 35.512 -0.125953 44.8113 0.00516856 54.2436C0.13629 63.676 2.75904 72.906 7.60752 80.9978C12.456 89.0897 19.3578 95.7557 27.6133 100.32L28.4862 98.7413C20.5092 94.3308 13.8401 87.8895 9.15511 80.0705C4.47013 72.2515 1.93582 63.3328 1.80912 54.2186C1.68242 45.1043 3.96783 36.1186 8.43366 28.1724C12.8995 20.2262 19.3869 13.602 27.2383 8.97151C35.0897 4.34099 44.0258 1.86873 53.1407 1.80538C62.2556 1.74202 71.2253 4.08983 79.1402 8.61078C87.0552 13.1317 93.6341 19.6651 98.2099 27.5484C102.786 35.4318 105.196 44.3849 105.196 53.5H107Z" stroke="#42CD9E" stroke-width="2" mask="url(#path-1-inside-1_16_760)"/>
                    </svg>                                           
                    <p class="time">${this.timer}</p>
            </section>
            <p class="timer-info">
                Closing...
            </p>
            <button>
                Press To Undo
            </button>
            </section>
        </section>
        `

        return closing;
    };

    renderDisable(){
        let disable = '';
        disable += `
        <section class="disable-overlay" id="order-${this.order.number}"></section>
        `
    }

    renderCard(){
        let card = '';
        if(this.state.cancel === false){
            card +=`
            <section class="order-card card-${this.order.orderCode} card-${this.order.number}">
                ${this.renderHead()}
                ${this.order.cancel === false && this.renderBtn()}
                <section class="card-body">
                    ${this.order.cancel === true && this.state.prep === false && this.state.complete === false && this.renderCancel()};
                    ${this.order.cancel === false && this.state.prep === false ? this.renderDisable() : ''}
                    ${this.order.cancel === false && this.state.complete === true ? this.renderClosing() : ''}
                    ${this.order.cancel === false && this.state.prep === true && this.state.complete === false ? this.renderItem() : ''}
                </section>
            </section>
            `
            return card;
        } return card;
    }

    renderTimeline(){
        let timeline = '';
        timeline += `
        <section class="order">
            <p class="order-name ${this.order.orderCode} card-${this.order.number}">Order # ${this.order.number}</p>
            <p class="order-time">${this.order.time}</p>
        </section>
        `;

        return timeline;
    }

    renderToDom(){
        this.orderContainer.insertinsertAdjacentHTML('afterbegin', this.renderCard());
        this.timelineContainer.insertinsertAdjacentHTML('afterbegin', this.renderCard());
    }

    debug(){
        console.log(this.renderCard())
    }

}