import _ from 'lodash';
import './style.css'
import WebpackIcon from './webpack_icon.png'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var icon = new Image();
    icon.src = WebpackIcon;
    element.appendChild(icon);

    return element;
}

document.body.appendChild(component());