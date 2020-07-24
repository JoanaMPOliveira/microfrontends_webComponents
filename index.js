import { items } from './data';

document.addEventListener('DOMContentLoaded', function () {
    // Specification for fields that should be displayed on list (they MUST be iqual to data object keys)
    let listFields = ['title', 'subtitle', 'link']

    // These element types are defined by the above scripts
    const webComponentsByRoute = {
        '/items-list': 'micro-fe-items-list',
        '/new-item': 'micro-fe-new-item',
        '/item-view': 'micro-fe-item-view'
    };
    const route = window.location.href.split('/')
    const webComponentType = webComponentsByRoute[`/${route.pop()}`];

    // Having determined the right web component custom element type,
    // we now create an instance of it and attach it to the document
    const root = document.getElementById('micro-frontend-root');
    const webComponent = document.createElement(webComponentType);
    
    webComponent.setAttribute('items', JSON.stringify(items))
    if (webComponentType === 'micro-fe-items-list') {
        webComponent.setAttribute('fields', JSON.stringify(listFields))
    }
    root.appendChild(webComponent);
})
