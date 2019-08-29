let hoverMenu = document.querySelector('.services-menu'),
    menuitems = document.querySelectorAll('.mainNavList > li'),
    servicesMenu = document.querySelector('.services-menu'),
    servicesDropDown = document.querySelector('.dropDown');


servicesDropDown.addEventListener('mouseover', showDropDown);
servicesDropDown.addEventListener('mouseout', hideDropDown);

function showDropDown() {
    servicesMenu.style.display = 'block'
}

function hideDropDown() {
    servicesMenu.style.display = 'none'
}


/* for (let i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener('mouseover', function callSubMenus(event) {
        let currentEl = event.target;
        currentEl.childNodes[1].style.display = 'block'
        menuitemsUl.style.display = 'block'
    })
}
for (let i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener('mouseout', function callSubMenus(event) {
        menuitemsUl.style.display = 'none'
        // console.log('hey')
        let currentEl = event.target;
        console.log(currentEl.childNodes[1]);
        currentEl.childNodes[1].style.display = 'none'
        // currentEl.childNodes[i].style.display = 'block'
        // element.childNodes[i];
        // element.style.display = 'block'
    })
} */






// let logoArray = Array.from(document.querySelectorAll('.partnerLogos > img'))
// console.log(logoArray);

let leftCaret = document.querySelector('#leftCaret');
rightCaret = document.querySelector('#rightCaret');

let logosContainer = document.querySelector('.logos')
// console.log(partnerLogosContainer.childNodes[0])


$('#leftCaret').click(
    function (e) {
        for (let i = 0; i < logosContainer.children.length; i++) {
            $(logosContainer.children[i]).addClass('moveInX');
            setTimeout(() => {
                $(logosContainer.children[i]).removeClass('moveInX');
            }, 500)
            // $(logosContainer.children[0]).addClass('reduceOpacity');
            // console.log('Timeout Complete')
            // logosContainer.children[i].transform = "translateX(" + (-200) + "px)";
        };

        // $(logosContainer.children[0]).addClass('reduceOpacity');

        setTimeout(() => {
            let removedChild = logosContainer.removeChild(logosContainer.children[0]);
            logosContainer.appendChild(removedChild)
            // console.log(removedChild)
        }, 500);
        console.log(e.target)
        // $(partnerLogosContainer.firstElementChild).addClass('hide');
    });



$('#rightCaret').click(function () {

});




for (let i = 0; i < logosContainer.children.length; i++) {
    $(logosContainer.children[i]).addClass('greyNlight')
}




// console.log(enoughSpawned);

// alert


function testEnoughSpawned() {
    let enoughSpawned = 0;

    for (let i = 0; i < 100; i++) {
        enoughSpawned += Math.random() > 0.75;
        if (enoughSpawned) {
            console.log(enoughSpawned, true);
            console.log('Found at the: ' + i + ' Time')
            break;
        } else if (!enoughSpawned) {
            console.log('Not found for the: ' + i + ' Time')
        }
        console.log('I ran')
    }

}


// testEnoughSpawned();
let enoughSpawned = Math.random() > 0.75;
// console.log(ToNumber(enoughSpawned))
// JS::ToNumber()

// a = 55;

var sampleObj = {
    firstValue: 'Hello',
    methodOne: () => {
        return this.sampleObj.firstValue;
    }
}



let toDo = [

    {
        task: 'Get The Files Started',
        done: false
    },
    {
        task: 'Get some food',
        done: true
    }
]

let DoneTasks = toDo.filter(
    (item) => item.done
)


// a = 9;

console.log(DoneTasks)
// let callValue = sampleObj.methodOne();
// console.log(window.sampleObj.methodOne())

let a = b = c = 8;
console.log(b);



class SuperCars {
    constructor(name, buildDate) {
        this.name = name
        this.ideaYears = 10
        this.buildDate = buildDate
    }
    callCarName = function () {
        return this.name
    }
    buildYearsNConceptionAge = function () {
        return `It took ${this.buildDate+this.ideaYears}`
    }
}


let lambo = new SuperCars('Lamboghini', 20);
console.log(`This ${lambo.callCarName()} and ${lambo.buildYearsNConceptionAge()}`);



var name = 'Mathew';

function checkingThisValue() {
    // name = 'ELlis';
    let myNestedArrowfunc = () => {
        console.log(this.name)
    }
    myNestedArrowfunc();
}

checkingThisValue();


// (() => alert('Hey I ran as an Anonymous Arrow function'))();


let caretClasses = $('#rightCaret').classList;
console.log(caretClasses.length)