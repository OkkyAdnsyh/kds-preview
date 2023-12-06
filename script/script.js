// class Timer{
//     constructor(){
//         this.timer = 5
//     }

//     // set setTimer(){
//     //     this.timer = this.getTimer() - 1
//     // }

//     get getTimer(){
//         return this.timer
//     }

//     startCountdown(){
//         if(this.timer === 0){
//             clearInterval(countdown);
//         }

//         let countdown = setInterval(() => {
//             while(this.timer > 0){
//                 setTimer();
//             }
//         }, 1000)
//     }
// }


// class Order{
//     constructor(order, orderContainer, timelineContainer){
//         item = order
//         this.orderContainer = orderContainer
//         this.timelineContainer = timelineContainer
//         this.prep = false
//         this.complete = false
//         this.close = false
//         this.cancel = false
//     };

//     set setCancel(state){
//         this.cancel = state
//     }

//     set setPrep(state){
//         this.prep = state
//     }

//     set setComplete(state){
//         this.complete = state
//     }

//     set setClose(state){
//         this.close = state
//     }

//     renderHead(){
//         let head = '';
//         head += `
//         <section class="card-head ${this.order.orderCode}">
//             <section class="order-info">
//                 <article class="order-info-head">
//                     <p class="name">${this.order.name}</p>
//                     <p class="order-number">Order # ${this.order.number}</p>
//                 </article>
//                 <article class="order-info-body">
//                     <p class="time">${this.order.time}</p>
//                     <p class="order-timer">00:00:01</p>
//                 </article>
//             </section>
//         </section>
//         <section class="card-cat ${this.order.orderCode}">
//             <p>${this.order.type}</p>
//         </section>
//         `;

//         return head;
//     };

//     renderCancel(){
//         let cancel = '';
//         cancel += `
//         <section class="order-close-overlay" data-target=".card-${this.order.number}">
//             <div>Order Canceled</div>
//         </section>
//         <section class="closing-overlay" id="closing-${this.order.number}">
//         `
//         return cancel;
//     };

//     renderInstruction(){
//         let instruction = '';
//         instruction += `
//         <section class="req-container">
//             <h3>special instructions</h3>
//             <p>
//                 ${orderData.order[i].instruction}
//             </p>
//         </section>
//         `;
//         return instruction;
//     };

//     renderItem(){
//         let allItemByCategory = '';

//         // loop through all category
//         this.order.category.map( cat => {
//             let singleItem = '';
//             let singleCategory = '';
            
//             // loop through all item by category
//             for(let i = 0; i < cat.order.length; i++){
//                 // if request is empty
//                 if(cat.order[i].req === null){
//                     singleItem += `
//                     <section class="order" id="order-${this.order.number}-${cat.id}-${i}">
//                         <section class="product-container">
//                             <p class="product-qty">${cat.order[i].qty}</p>
//                             <section class="product">
//                                 <p class="product-name">${cat.order[i].name}</p>
//                             </section>
//                         </section>
//                         <section class="checkmark">
//                             <svg width="15" height="13" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M9 0.736018L2.82857 7L0 4.12901L0.725143 3.39299L2.82857 5.52274L8.27486 0L9 0.736018Z" fill="#006666"/>
//                                 </svg>                                            
//                             <input type="radio" name="" id="" data-target="#order-${this.order.number}-${cat.id}-${i}" class="order-check">                                         
//                         </section>
//                     </section>
//                     `;
//                 }else{
//                     let singleReq = '';
//                     // loop through all request
//                     cat.order[i].req.map( req => {
//                         singleReq += `
//                         <p class="special">${req}</p>
//                         `
//                     });
//                     singleItem += `
//                     <section class="order" id="order-${this.order.number}-${cat.id}-${i}">
//                         <section class="product-container">
//                             <p class="product-qty">${cat.order[i].qty}</p>
//                             <section class="product">
//                                 <p class="product-name">${cat.order[i].name}</p>
//                                 ${singleReq}
//                             </section>
//                         </section>
//                         <section class="checkmark">
//                             <svg width="15" height="13" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M9 0.736018L2.82857 7L0 4.12901L0.725143 3.39299L2.82857 5.52274L8.27486 0L9 0.736018Z" fill="#006666"/>
//                                 </svg>                                            
//                             <input type="radio" name="" id="" data-target="#order-${this.order.number}-${cat.id}-${i}" class="order-check">                                         
//                         </section>
//                     </section>
//                     `;
//                 };
//             };

//             // add all item to single category container
//             singleCategory += `
//             <section class="order-cat">
//                 <p>category ${cat.id} :</p>
//             </section>
//             `

//             // add category to the all order container
//             allItemByCategory += `
//                 ${singleCategory}
//                 ${singleItem}
//             `
//         });

//         return allItemByCategory;
//     };

//     renderBtn(){
//         let prepBtn = '';
//         let completeBtn = '';

//         prepBtn += `
//         <section class="card-prep-btn" id="prep-${this.order.number}">
//             <button class="prep-btn" onclick="" data-target="#order-${this.order.number}" data-prep="#prep-${this.order.number}">Start Preparing</button>
//         </section>
//         `

//         completeBtn += `
//         <section class="card-prep-btn order-complete">
//             <button class="complete-btn"" onclick="">Order Complete</button>
//         </section>
//         `
//         if(this.prep === false && this.complete === false){
//             return prepBtn;
//         } else if (this.prep === true && this.complete === true){
//             return completeBtn;
//         } return;
//     };

//     renderClosing(){
//         let closing = '';
//         closing += `
//         <section class="closing-container">
//             <section class="countdown-container">
//                     <svg class="timer-path" width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="53.5" cy="53.5" r="53" stroke="black" stroke-opacity="0.5"/>
//                     </svg>     
//                     <svg class="timer-indicator" width="107" height="101" viewBox="0 0 107 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <mask id="path-1-inside-1_16_760" fill="white">
//                         <path d="M107 53.5C107 44.0668 104.506 34.8012 99.7703 26.6427C95.0347 18.4843 88.2262 11.7229 80.035 7.04419C71.8438 2.36547 62.5612 -0.0642701 53.1282 0.00129216C43.6951 0.0668544 34.4472 2.62539 26.3218 7.41752C18.1964 12.2096 11.4826 19.065 6.86089 27.2885C2.23922 35.512 -0.125953 44.8113 0.00516856 54.2436C0.13629 63.676 2.75904 72.906 7.60752 80.9978C12.456 89.0897 19.3578 95.7557 27.6133 100.32L28.4862 98.7413C20.5092 94.3308 13.8401 87.8895 9.15511 80.0705C4.47013 72.2515 1.93582 63.3328 1.80912 54.2186C1.68242 45.1043 3.96783 36.1186 8.43366 28.1724C12.8995 20.2262 19.3869 13.602 27.2383 8.97151C35.0897 4.34099 44.0258 1.86873 53.1407 1.80538C62.2556 1.74202 71.2253 4.08983 79.1402 8.61078C87.0552 13.1317 93.6341 19.6651 98.2099 27.5484C102.786 35.4318 105.196 44.3849 105.196 53.5H107Z"/>
//                         </mask>
//                         <path d="M107 53.5C107 44.0668 104.506 34.8012 99.7703 26.6427C95.0347 18.4843 88.2262 11.7229 80.035 7.04419C71.8438 2.36547 62.5612 -0.0642701 53.1282 0.00129216C43.6951 0.0668544 34.4472 2.62539 26.3218 7.41752C18.1964 12.2096 11.4826 19.065 6.86089 27.2885C2.23922 35.512 -0.125953 44.8113 0.00516856 54.2436C0.13629 63.676 2.75904 72.906 7.60752 80.9978C12.456 89.0897 19.3578 95.7557 27.6133 100.32L28.4862 98.7413C20.5092 94.3308 13.8401 87.8895 9.15511 80.0705C4.47013 72.2515 1.93582 63.3328 1.80912 54.2186C1.68242 45.1043 3.96783 36.1186 8.43366 28.1724C12.8995 20.2262 19.3869 13.602 27.2383 8.97151C35.0897 4.34099 44.0258 1.86873 53.1407 1.80538C62.2556 1.74202 71.2253 4.08983 79.1402 8.61078C87.0552 13.1317 93.6341 19.6651 98.2099 27.5484C102.786 35.4318 105.196 44.3849 105.196 53.5H107Z" stroke="#42CD9E" stroke-width="2" mask="url(#path-1-inside-1_16_760)"/>
//                     </svg>                                           
//                     <p class="time">${this.timer}</p>
//             </section>
//             <p class="timer-info">
//                 Closing...
//             </p>
//             <button>
//                 Press To Undo
//             </button>
//             </section>
//         </section>
//         `

//         return closing;
//     };

//     renderDisable(){
//         let disable = '';
//         disable += `
//         <section class="disable-overlay" id="order-${this.order.number}"></section>
//         `
//     }

//     renderCard(){
//         let card = '';
//         if(this.cancel === false){
//             card +=`
//             <section class="order-card card-${this.order.orderCode} card-${this.order.number}">
//                 ${this.renderHead()}
//                 ${this.order.cancel === false && this.renderBtn()}
//                 <section class="card-body">
//                    ${this.renderItem()}
//                 </section>
//             </section>
//             `
//             return card;
//         } return card;
//     }

//     renderTimeline(){
//         let timeline = '';
//         timeline += `
//         <section class="order">
//             <p class="order-name ${this.order.orderCode} card-${this.order.number}">Order # ${this.order.number}</p>
//             <p class="order-time">${this.order.time}</p>
//         </section>
//         `;

//         return timeline;
//     }

//     renderToDom(){
//         this.orderContainer.insertinsertAdjacentHTML('afterbegin', this.renderCard());
//         this.timelineContainer.insertinsertAdjacentHTML('afterbegin', this.renderCard());
//     }

//     debug(){
//         console.log(this.renderCard())
//     }
// }

const orderWrap = document.querySelector('.order-wrapper');

const dropToggle = document.querySelectorAll('.drop-toggle');
const filterToggle = document.querySelectorAll('.filter-radio');
const dropdown = document.querySelectorAll('.dropdown');

const optToggle = document.querySelectorAll('.option-toggle');
const layoutToggle = document.querySelectorAll('.opt');
const displayOption = document.querySelectorAll('.option');

const infoToggle = document.querySelector('.info-toggle');
const infoModal = document.querySelector('.info-modal');

const classicDisplay = document.querySelector('#classic-display');
const tiledDisplay = document.querySelector('#tiled-display');
const splitDisplay = document.querySelector('#split-display');

const handleDropCheck = () => {
    for(let i = 0; i < dropToggle.length; i++){
        if(dropToggle[i].classList.contains('isActive')){
            dropToggle[i].classList.remove('isActive');
            dropdown[i].classList.remove('isActive');
        };
    };
};

const handleDisplayChange = (target) => {
    if(orderWrap.classList.contains('classic')){
        orderWrap.classList.remove('classic')
    };
    if(orderWrap.classList.contains('masonry')){
        orderWrap.classList.remove('masonry')
    };
    if(orderWrap.classList.contains('split')){
        orderWrap.classList.remove('split')
    };

    orderWrap.classList.add(target);
};

const handleDropToggle = (target) => {
    target.classList.toggle('isActive');
};

const handleDropOpen = (target) => {
    let dropdown = document.querySelector(target.dataset.target);
    // check if toggle has isActive class
    if(target.classList.contains('isActive')){
        dropdown.classList.add('isActive');
        return;
    };
    dropdown.classList.remove('isActive');
};

const handleActiveFilter = (target) => {
    let filterButton = document.querySelector(target.dataset.target);
    filterButton.classList.toggle('isActive');
};

const checkOptToggle = () => {
    for(let i = 0; i < optToggle.length; i++){
        optToggle[i].removeAttribute('checked');
        let target = document.querySelector(optToggle[i].dataset.target);
        let toggle = document.querySelector(optToggle[i].dataset.toggle);
        target.classList.remove('isActive');
        toggle.classList.remove('isActive');
    };
};

displayOption.forEach(btn => {
    btn.addEventListener('click', () => {
        for(let i = 0 ; i < displayOption.length ; i++){
            displayOption[i].classList.remove('isActive');
            btn.classList.add('isActive');
        }
    })
})

dropToggle.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        if(toggle.classList.contains('isActive')){
            handleDropToggle(toggle);
            handleDropOpen(toggle);
            return;
        }

        handleDropCheck();
        handleDropToggle(toggle);
        handleDropOpen(toggle);
    });
});

filterToggle.forEach((filter) => {
    filter.addEventListener('click', () => {
        handleActiveFilter(filter);
    });
});

infoToggle.addEventListener('click', () => {
    infoToggle.classList.toggle('isActive');
    infoModal.classList.toggle('isActive');
});

infoModal.addEventListener('click', () => {
    infoToggle.classList.toggle('isActive');
    infoModal.classList.toggle('isActive');
});

optToggle.forEach((toggle) => {
    let target = document.querySelector(toggle.dataset.target);
    let toggleTarget = document.querySelector(toggle.dataset.toggle);
    toggle.addEventListener('click', () => {
        checkOptToggle();
        toggle.setAttribute('checked', true);
        target.classList.toggle('isActive');
        toggleTarget.classList.toggle('isActive');
    });
});

classicDisplay.addEventListener('click', () => {
    handleDisplayChange('classic')
});

tiledDisplay.addEventListener('click', () => {
    handleDisplayChange('masonry')
});

splitDisplay.addEventListener('click', () => {
    handleDisplayChange('split')
});

// dummy data

const orderData = [
    {
        number : 202310625,
        name : "Sophia",
        time : "02:28:24 PM",
        type : "To Go",
        orderCode : "to-go",
        cancel : true,
        instruction : null,
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                    {
                        qty : 1,
                        name : "Espresso",
                        req : null
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Cortado",
                        req : [
                            "Cinnamon",
                            "Cocoa Powder"
                        ]
                    },
                ]
            }
        ],
    },
    {
        number : 202310626,
        name : "Benjamin",
        time : "02:28:24 PM",
        type : "Delivery",
        orderCode : "delivery",
        cancel : false,
        instruction : "Extra Cheese and Extra Pickles! Also make it spicy.",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null,
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            },
            {
                id : 2,
                order : [
                    {
                        qty : 1,
                        name : "Espresso",
                        req : null
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Flat White",
                        req : null
                    },
                ]
            }
        ],
    },
    {
        number : 202310627,
        name : "Ethan",
        time : "02:28:24 PM",
        type : "For Here",
        cancel : false,
        instruction : null,
        orderCode : "for-here",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            }
        ],
    },
    {
        number : 202310628,
        name : "William",
        time : "02:28:24 PM",
        type : "Pick Up",
        instruction : null,
        cancel : false,
        orderCode : "pick-up",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            },
            {
                id : 2,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Cortado",
                        req : [
                            "Cinnamon",
                            "Cocoa Powder"
                        ]
                    },
                ]
            },
        ],
    },
    {
        number : 202310629,
        name : "Sophia",
        time : "02:28:24 PM",
        type : "Curb Side",
        cancel : false,
        orderCode : "curb-side",
        instruction : "Extra Cheese and Extra Pickles! Also make it spicy.",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                    {
                        qty : 1,
                        name : "Espresso",
                        req : null
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Cortado",
                        req : [
                            "Cinnamon",
                            "Cocoa Powder"
                        ]
                    },
                ]
            } 
        ],
    },
    {
        number : 202310630,
        name : "Benjamin",
        time : "02:28:24 PM",
        type : "Drive Thru",
        orderCode : "drive-thru",
        cancel : false,
        instruction : "Extra Cheese and Extra Pickles! Also make it spicy.",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            },
            {
                id : 2,
                order : [
                    {
                        qty : 1,
                        name : "Espresso",
                        req : null
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Flat White",
                        req : null
                    },
                ]
            }
        ],
    },
    {
        number : 202310631,
        name : "Ethan",
        time : "02:28:24 PM",
        type : "Delivery",
        cancel : false,
        instruction : null,
        orderCode : "delivery",
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            }
        ],
    },
    {
        number : 202310632,
        name : "William",
        time : "02:28:24 PM",
        type : "To Go",
        orderCode : "to-go",
        cancel : false,
        instruction : null,
        category : [
            {
                id : 1,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                ]
            },
            {
                id : 2,
                order : [
                    {
                        qty : 1,
                        name : "Capuccino",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Latte",
                        req : [
                            "Whipped Cream"
                        ]
                    },
                    {
                        qty : 4,
                        name : "Raita",
                        req : null
                    },
                    {
                        qty : 2,
                        name : "Americano",
                        req : null
                    },
                    {
                        qty : 3,
                        name : "Cortado",
                        req : [
                            "Cinnamon",
                            "Cocoa Powder"
                        ]
                    },
                ]
            },
        ],
    },
]


const timeline = document.querySelector('.timeline');
const classicLayout = document.querySelector('#classic-layout');
let orderBodyArray = [];

let template = document.getElementsByTagName('template')[0];

// render order card
orderData.forEach((data) => {
    let content = template.content.cloneNode(true);
    // set card id
    let card = content.querySelector('.order-card');
    card.setAttribute('id', `order-number-${data.number}`);
    card.setAttribute('data-order-cat', `${data.orderCode}`);

    // set card head content
    let cardHead = content.querySelector('.card-head');
    cardHead.classList.add(`${data.orderCode}`);
    let orderName = cardHead.querySelector('.name');
    orderName.innerHTML = `${data.name}`;
    let orderNumber = cardHead.querySelector('.order-number');
    orderNumber.innerHTML = `Order # ${data.number}`;
    let orderTime = cardHead.querySelector('.time');
    orderTime.innerHTML = `${data.time}`;

    // set order category
    let cardCat = content.querySelector('.card-cat');
    cardCat.classList.add(`${data.orderCode}`);
    let cat = cardCat.querySelector('p');
    cat.innerHTML = `${data.type}`;

    // show prep button
    let cardPrepBtn = content.querySelector('.card-prep-btn');
    cardPrepBtn.classList.add('isActive');
    cardPrepBtn.setAttribute('data-enable-target', `#disable-overlay-${data.number}`);

    // set target for complete-order btn
    let cardCompBtn = content.querySelector('.card-complete-btn');
    cardCompBtn.setAttribute('data-close-target', `#close-order-${data.number}`);
    cardCompBtn.setAttribute('data-close-order', `#body-${data.number}`);
    cardCompBtn.setAttribute('data-order-complete', `#order-number-${data.number}`);

    // set target for closing timer when order is complete
    let cardClosing = content.querySelector('.closing-container');
    cardClosing.setAttribute('id', `close-order-${data.number}`);

    // set id for disable overlay
    let cardDisableOrder = content.querySelector('.disable-overlay');
    cardDisableOrder.setAttribute('id', `disable-overlay-${data.number}`);

    // set for canceled order
    let cardCancelOrder = content.querySelector('.order-close-overlay');
    cardCancelOrder.setAttribute('data-cancel-order', `#${data.number}`);

    let cardOrderContainer = content.querySelector('.order-container');
    cardOrderContainer.setAttribute('id', `body-${data.number}`)

    // render each order in data
    data.category.forEach((cat) => {
        // create container for each order cat
        let containerPerOrderCat = document.createElement('section');
        containerPerOrderCat.classList.add('order-product-container');

        let orderCat = document.createElement('section');
        orderCat.classList.add('order-cat');
        let catCount = document.createElement('p');
        catCount.innerHTML = `category ${cat.id} :`
        orderCat.appendChild(catCount);

        // create container for each order item
        let orderBody = document.createElement('section');
        orderBody.classList.add('order-body');



        // render each order item depend on its category
        cat.order.forEach((item, id) => {
            let order = document.createElement('section');
            order.classList.add('order');

            let itemContainer = document.createElement('section');
            itemContainer.classList.add('product-container');
            
            let itemQty = document.createElement('p');
            itemQty.innerHTML = `${item.qty}`
            itemQty.classList.add('product-qty');

            let orderItem = document.createElement('section');
            orderItem.classList.add('product');
            let itemName = document.createElement('p');
            itemName.innerHTML = `${item.name}`;
            itemName.classList.add('product-name');
            orderItem.appendChild(itemName);

            if(item.req !== null){
                item.req.forEach(req => {
                    let orderReq = document.createElement('p');
                    orderReq.innerHTML = `${req}`;
                    orderReq.classList.add('special');

                    orderItem.appendChild(orderReq);
                })
            }

            let orderCheckmark = document.createElement('section');
            orderCheckmark.classList.add('checkmark');
            orderCheckmark.innerHTML = `
            <svg width="15" height="13" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0.736018L2.82857 7L0 4.12901L0.725143 3.39299L2.82857 5.52274L8.27486 0L9 0.736018Z" fill="#006666"/>
            </svg>
            `

            itemContainer.appendChild(itemQty);
            itemContainer.appendChild(orderItem);

            order.appendChild(itemContainer);
            order.appendChild(orderCheckmark);
            orderBody.appendChild(order);
        })


        containerPerOrderCat.appendChild(orderCat);
        containerPerOrderCat.appendChild(orderBody);
        cardOrderContainer.appendChild(containerPerOrderCat);
    })

    if(data.instruction !== null){
        let instruction = document.createElement('section');
        instruction.classList.add('req-container');

        let instructionTitle = document.createElement('h3');
        instructionTitle.innerHTML = 'special instructions';

        let instructionContent = document.createElement('p');
        instructionContent.innerHTML = `${data.instruction}`;
        
        instruction.appendChild(instructionTitle);
        instruction.appendChild(instructionContent);
        cardOrderContainer.appendChild(instruction);

    }

    classicLayout.appendChild(content);

});

// render timeline
orderData.forEach(data => {
    let timelineOrder = document.createElement('section');
    timelineOrder.classList.add('order');
    timelineOrder.setAttribute('id', `timeline-${data.number}`);

    let timelineNumber = document.createElement('p');
    let timelineTime = document.createElement('p');
    timelineNumber.classList.add('order-name');
    timelineNumber.classList.add(`${data.orderCode}`);
    timelineNumber.innerHTML = `Order # ${data.number}`;
    timelineTime.classList.add('order-time');
    timelineTime.innerHTML = `${data.time}`;

    timelineOrder.appendChild(timelineNumber);
    timelineOrder.appendChild(timelineTime);

    timeline.appendChild(timelineOrder);
});

let cancelCountdown;

// handle if order is cancelled
// find order that has cancel state set to true
const orderIsCancelled = orderData.filter(item => item.cancel === true);
orderIsCancelled.forEach(order => {
    // activate cancel overlay
    let cancelOrder = document.querySelector(`#order-number-${order.number}`);
    let cancelTimeline = document.querySelector(`#timeline-${order.number}`);
    let cancelOverlay = cancelOrder.querySelector('.order-close-overlay');
    cancelOverlay.classList.add('isActive');
    // remove prep button
    let cancelPrepBtn = cancelOrder.querySelector('.card-prep-btn');
    cancelPrepBtn.classList.remove('isActive');

    cancelCountdown = setTimeout(() => {
        cancelOrder.remove();
        cancelTimeline.remove();
    }, 5000);
});

// handle prep-btn function
const prepBtn = document.querySelectorAll('.card-prep-btn');
const handlePrepBtn = (target) => {
    let overlay = document.querySelector(target.dataset.enableTarget);
    target.classList.remove('isActive');
    overlay.classList.add('disable');
};
prepBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        handlePrepBtn(btn);
    });
});

// handle order checkmark
const allOrderItem = document.querySelectorAll('.order');
allOrderItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('isActive');
        let checkMark = item.querySelector('.checkmark');
        checkMark.classList.toggle('isActive');
    })
})

// handle order complete if all order is marked
const orderCard = document.querySelectorAll('.order-card');
orderCard.forEach(card => {
    let orderItemSingle = card.querySelectorAll('.order');
    let cardCompleteBtn = card.querySelector('.card-complete-btn');

    orderItemSingle.forEach(order => {
        order.addEventListener('click', () => {
            let orderComplete = card.querySelectorAll('.order.isActive');
            if(orderItemSingle.length === orderComplete.length){
                cardCompleteBtn.classList.add('isActive');
            };
        });
    });
});


let closeCount;

// handle complete-btn click event
const completeBtn = document.querySelectorAll('.card-complete-btn');
completeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let countdown = 5;
        let closingOverlay = document.querySelector(btn.dataset.closeTarget);
        let closeBody = document.querySelector(btn.dataset.closeOrder);
        let closeOrder = document.querySelector(btn.dataset.orderComplete);

        btn.classList.remove('isActive');
        closingOverlay.classList.add('isActive');
        closeBody.classList.add('isComplete');

        let timer = closingOverlay.querySelector('.closing-time');
        timer.innerHTML = `${countdown}`;

        closeCount = setInterval(() => {
            if(countdown === 0){
                closeOrder.remove();
                return
            }

            countdown--;
            timer.innerHTML = `${countdown}`;
        }, 1000)
    });
});

// handle undo button
orderCard.forEach(order => {
    let undoBtn = order.querySelector('.undo-btn');
    let closingOverlay = order.querySelector('.closing-container');
    let orderContainer = order.querySelector('.order-container');
    let completeBtn = order.querySelector('.card-complete-btn');

    undoBtn.addEventListener('click', () => {
        clearInterval(closeCount);
        countdown = 5;
        closingOverlay.classList.remove('isActive');
        orderContainer.classList.remove('isComplete');
        completeBtn.classList.add('isActive');
    })
})
